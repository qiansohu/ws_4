import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent}        from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {Config} from "./app-config";
import {IndexModule} from "./index/index.module";
import {LoginModule} from "./login/login.module";
import {HttpUtil} from "./util/http.util";
import {UserService} from "./user/user.service";
import { BuyAccountComponent } from './buy-account/buy-account.component';

@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,IndexModule,LoginModule],
  declarations: [AppComponent, BuyAccountComponent     ],
  providers: [
    Config,HttpUtil,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
