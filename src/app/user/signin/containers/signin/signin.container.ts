import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ILoginFormData } from './../../../interfaces/auth';
import { AuthService } from './../../../services/auth.service';

@Component({
  templateUrl: './signin.container.html',
  styleUrls: ['./signin.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninContainer implements OnInit, OnDestroy {

  private _destroy$ = new ReplaySubject<number>(1);

  constructor(
    private _authService: AuthService,
    private _router: Router,
    ) { }

  public get loginStatus$(): Observable<void> {
    return this._authService.login$;
  }

  public ngOnInit(): void {
    this._listenStatus();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(1);
    this._destroy$.complete();
  }

  public sendLoginQuery(formData: ILoginFormData): void {
    this._authService.login(formData);
  }

  private _listenStatus(): void {
    this.loginStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: () => this._router.navigate(['/']),
        error: console.error,
      });
  }

}
