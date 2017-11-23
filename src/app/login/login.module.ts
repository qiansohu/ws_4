import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginService} from "./login.service";


@NgModule({
  imports: [BrowserModule, FormsModule,LoginRoutingModule],
  declarations: [LoginComponent
     ],
  providers: [Config,LoginService
  ]
})
export class LoginModule {

}
