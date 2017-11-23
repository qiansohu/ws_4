import { Component } from '@angular/core';
import { Config } from '../../app-config';
import {Router} from "@angular/router";

@Component({
  selector: 'my-aside',
  templateUrl: './my-aside.component.html'
})

export class MyAsideComponent {
  app:any;
  constructor(private config:Config,
              private router:Router
               ){
    this.app = config.appConfig;
  }

  // checkUserAccessAuth():any {
  //   let userId = "admin";
  //   let password = "123456";
  //   let auth= "202";
  //   this.loginService.checkUserAccessAuth(userId, password,auth).subscribe(data => {
  //     console.log(JSON.stringify(data));
  //     if (data.code == '1001') {
  //       this.router.navigate(['../index']);
  //       //$cookieStore.put("sessionId",data.data.sessionId);
  //     } else if (data.code == '10010011') {
  //       console.log(data.msg);
  //     } else {
  //       console.log(data.msg);
  //     }
  //     ;
  //   });
  // }
  }
