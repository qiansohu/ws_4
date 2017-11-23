import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {UserListComponent} from "../user/user-list.component";
import {UserAddComponent} from "../user/user-add.component";
import {IndexComponent} from "./index.component";
import {UserUpdateComponent} from "../user/user-update.component";
const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
   {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'userList',
      component: UserListComponent
    },
    {
      path: 'userAdd',
      component: UserAddComponent
    },
    {
      path: 'userUpdate/:id',
      component: UserUpdateComponent
    }
  ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}
