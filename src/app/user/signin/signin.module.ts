import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

import { SigninContainer } from './containers/signin/signin.container';
import { SigninComponent } from './components/signin/signin.component';
import { SigninRoutingModule } from './signin-routing.module';


@NgModule({
  declarations: [
    SigninComponent,
    SigninContainer,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // PrimeNG
    CardModule,
    InputTextModule,
    PasswordModule,
    InputSwitchModule,
    ButtonModule,
    // Own
    SigninRoutingModule,
  ],
})
export class SigninModule { }
