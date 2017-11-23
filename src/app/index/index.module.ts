import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from '../in-memory-data.service';

import {IndexComponent}        from './index.component';
import {DashboardComponent}  from './dashboard.component';
import {IndexRoutingModule} from "./index-routing.module";
import {MyAsideComponent} from "./common/my-aside.component";
import {MySettingsComponent} from "../view/blocks/my-settings.component";
import {MyFullscreenComponent} from "../view/blocks/my-fullscreen.component";
import {UserListComponent} from "../user/user-list.component";
import {PaginationComponent} from "../pagination/pagination.component";
import {PaginationConfig} from "../pagination/pagination.config";
import { HttpModule, JsonpModule } from '@angular/http';
import {UserAddComponent} from "../user/user-add.component";
import {UserUpdateComponent} from "../user/user-update.component";
import {Config} from "../app-config";
import {MyHeaderComponent} from "./common/my-header.component";

@NgModule({
  imports: [BrowserModule, FormsModule,
    IndexRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    JsonpModule],
  declarations: [IndexComponent, DashboardComponent,PaginationComponent, MyHeaderComponent,
    MyAsideComponent, MySettingsComponent,MyFullscreenComponent,UserListComponent,
    UserAddComponent,UserUpdateComponent
     ],
  providers: [
    PaginationConfig,Config
  ]
})
export class IndexModule {

}
