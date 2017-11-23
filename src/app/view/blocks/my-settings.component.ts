/**
 * Created by Administrator on 2017/5/31.
 */

import {Component} from "@angular/core";
import {Config} from "../../app-config";

@Component({
  selector: 'my-settings',
  templateUrl: './settings.html'
})
export class MySettingsComponent{
  app:any;
  constructor(private config:Config){
    this.app = config.appConfig;
  }
}
