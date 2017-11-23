import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login.component";
import {BuyAccountComponent} from "../buy-account/buy-account.component";

const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: 'buyAccount',  component: BuyAccountComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
