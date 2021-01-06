import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  public form: FormGroup;

  public emailControl = new FormControl(null, [
    Validators.email,
    Validators.required,
  ]);

  public passwordControl = new FormControl(null, [
    Validators.required,
  ]);

  public rememberControl = new FormControl(false);

  constructor() { }

  public ngOnInit(): void {
    this._initForm()
  }

  public submit(): void {
    console.log(this.form)
  }

  private _initForm(): void {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
      remember: this.rememberControl,
    });
  }

}
