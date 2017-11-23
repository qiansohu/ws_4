import {Component, OnInit} from "@angular/core";
import {Config} from "../app-config";
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
import {LoginUser} from "./LoginUser";

declare var $:any;
declare var RSAUtils:any;

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements  OnInit{
  app:any;
  loginUser:LoginUser = new LoginUser();
  passwordIsError=false;

  constructor(private config:Config,
              private router:Router,
              private loginService:LoginService) {
    this.app = config.appConfig;

      }
  ngOnInit(){
    this.loginUser.userId='admin';
    this.loginUser.password='123456';

    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }
  login():any{
    let userId = this.loginUser.userId;
    let password = this.loginUser.password;
    console.log(this.loginUser);
    this.loginService.getPublicKey().subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.code == '1001'){
        var modulus = data.data.modulus;
        var publicExponent = data.data.exponent;
        var publicKey =  RSAUtils.getKeyPair(publicExponent,'',modulus);
        password = RSAUtils.encryptedString(publicKey,password);
        this.loginService.login(userId,password).subscribe(data =>{
          console.log("以下返回数据");
          console.log(JSON.stringify(data));
          if (data.code == '1001') {
            this.router.navigate(['../index']);
            //$cookieStore.put("sessionId",data.data.sessionId);
          } else if (data.code == '10010011') {
            this.passwordIsError=true;
            console.log(data.msg);
          }else{
            this.passwordIsError=true;
            console.log(data.msg);
          }
          ;
        })

      }
    });


  }
}
