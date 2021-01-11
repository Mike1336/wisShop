import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ILoginFormData } from './../../../interfaces/auth';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {

  @Output()
  public formSubmit = new EventEmitter<ILoginFormData>();

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
    this._initForm();
  }

  public submit(): void {
    const { email, password, remember } = this.form.value;
    this.formSubmit.emit({ email, password, remember });
  }

  private _initForm(): void {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
      remember: this.rememberControl,
    });
  }

}
