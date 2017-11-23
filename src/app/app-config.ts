import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017/5/31.
 */
@Injectable()
export class Config{
  public appConfig:any = {
    baseUrl:"http://localhost:8080/angular4-admin-user/",
    // baseUrl:"http://api.henue.com/",
    name: '股市三碗面',
    version: '1.0.1',
    // for chart colors
    color: {
      primary: '#7266ba',
      info:    '#23b7e5',
      success: '#27c24c',
      warning: '#fad733',
      danger:  '#f05050',
      light:   '#e8eff0',
      dark:    '#3a3f51',
      black:   '#1c2b36'
    },
    settings: {
      themeID: 1,
      navbarHeaderColor: 'bg-black',
      navbarCollapseColor: 'bg-white-only',
      asideColor: 'bg-black',
      headerFixed: true,
      asideFixed: false,
      asideFolded: false,
      asideDock: false,
      container: false
    }
  };
}
