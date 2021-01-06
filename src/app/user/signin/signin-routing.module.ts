import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninContainer } from './containers/signin/signin.container';

const routes: Routes = [
  {
    path: '',
    component: SigninContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninRoutingModule { }
