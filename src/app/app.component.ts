/**
 * Created by Administrator on 2017/6/8.
 */
import {Component, OnInit} from '@angular/core';
import {Config} from "./app-config";

declare var $:any;
@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
`
})

export class AppComponent implements  OnInit{
  app:any;
  constructor(private config:Config){
    this.app = config.appConfig;
  };
  ngOnInit(){
    $.widget.bridge('uibutton', $.ui.button);
  }

}
