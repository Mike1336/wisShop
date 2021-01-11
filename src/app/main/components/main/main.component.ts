import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../user/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  public get isAuth(): boolean {
    return this._authService.isAuth();
  }

  public ngOnInit(): void {
  }

  public logout(): void {
    this._authService.logout();
  }

}
