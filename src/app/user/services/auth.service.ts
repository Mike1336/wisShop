import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IJWTPayload, ILoginFormData, ITokens, User } from '../interfaces/auth';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public now = new Date().getTime();

  public expTimeOfToken = 0;

  private _authUrl = '/auth/jwt/';

  private _login$ = new Subject<void>();

  private _checkingDataForLogin$ = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private userService: UserService) { }

  public get user(): User {
    return this.userService.user;
  }

  public get checkingDataForLogin$() : Observable<boolean> {
    return this._checkingDataForLogin$.asObservable();
  }

  public get login$(): Observable<void> {
    return this._login$.asObservable()
      .pipe(
        shareReplay(),
        );
  }

  public get token(): string | null {
    return localStorage.getItem('access-token');
  }

  public changeLoadingStatus(data: boolean): void {
    this._checkingDataForLogin$.next(data);
  }

  public login(user: ILoginFormData): void {
    const { email, password, remember } = user;
    this._http.post(
      `${this._authUrl}create`, { email, password })
      .subscribe({
        next: (response: unknown) => {
          this._checkResponse(response);
        },
        error: (error) => {
          this._login$.error(error);
        },
      });
  }

  public logout(): void {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('token-exp');
  }

  public isAuth(): boolean {
    return !!this.token;
  }

  private _checkResponse(response: any): void {
    if (!response || !('access' in response) || !('refresh' in response)) {
      throw new Error(`Invalid response: ${response}`);
    }
    this._setToken(response);
    this._setUser(response.access);
  }

  private _setUser(accessToken: string): void {
    const payload: IJWTPayload = this._getEncodedPayload(accessToken);
    const { user_id } = payload;

    this._http.get(`/auth/users/${user_id}`, {
      headers: { ['Authorization']: `JWT ${accessToken}` },
    })
      .subscribe({
        next: (response: any) => {
          this._login$.next();
        },
        error: (error) => {
          throw new Error(`Server error: ${error}`);
        },
      });
  }

  private _setToken({ access, refresh }: ITokens): void {
    const payload: IJWTPayload = this._getEncodedPayload(access);

    this.expTimeOfToken = +(new Date(payload.exp).getTime());
    localStorage.setItem('access-token', access);
    localStorage.setItem('refresh-token', refresh);
    localStorage.setItem('token-exp', this.expTimeOfToken.toString());
  }

  private _getEncodedPayload(accessToken: string): IJWTPayload {
    const base64Url = accessToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  private _getNewAccessToken(): void {
    const refresh = localStorage.getItem('refresh-token');

    this._http.post(`${this._authUrl}/refresh`, { refresh })
      .subscribe({
        next: (response: ITokens | any) => {
          this._setToken(response);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

}
