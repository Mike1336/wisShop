import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './components/signup/signup.component';
import { SignupContainer } from './containers/signup/signup.container';
import { SignupService } from './services/signup.service';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [
    SignupComponent,
    SignupContainer,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
  ],
  providers: [
    SignupService,
  ],
})
export class SignupModule { }
