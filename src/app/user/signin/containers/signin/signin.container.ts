import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ILoginFormData } from './../../../interfaces/auth';
import { AuthService } from './../../../services/auth.service';

@Component({
  templateUrl: './signin.container.html',
  styleUrls: ['./signin.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninContainer implements OnInit {

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public sendLoginQuery(formData: ILoginFormData): void {
    this._authService.login(formData);
  }

}
