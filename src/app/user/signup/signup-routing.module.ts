import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupContainer } from './containers/signup/signup.container';

const routes: Routes = [
  {
    path: '',
    component: SignupContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule { }
