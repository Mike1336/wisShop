import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SigninModule,
    SignupModule,
  ],
})
export class UserModule { }
