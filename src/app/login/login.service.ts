import {Injectable} from "@angular/core";
import {Rsa} from "../rsa/Rsa";
import {HttpUtil} from "../util/http.util";
import {LoginUser} from "./LoginUser";


@Injectable()
export class LoginService{
  private baseUrl = "login/";
  constructor(private httpUtil: HttpUtil){
  }

  login(userId:string, password:string) {
    let loginUser = new LoginUser();
    loginUser.password = password;
    loginUser.userId = userId;

    let url = this.baseUrl+"userLogin";
    return this.httpUtil.post(url,loginUser);
  }

  getPublicKey():any {
    let url = this.baseUrl+"getPublicKey";
    return this.httpUtil.get(url);
  }
  // checkUserAccessAuth(userId:string,password:string,auth:string):any{
  //   let url = this.baseUrl+"userAccessMenu";
  //   return this.httpUtil.post(url,auth);
  //
  // }
}
