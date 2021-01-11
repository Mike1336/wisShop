import { Injectable } from '@angular/core';

import { User } from '../interfaces/auth';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _user: User;

  constructor() {}

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

}
