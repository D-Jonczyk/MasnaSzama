import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MyHomeComponent } from '../my-home/my-home.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthGuardService } from '../auth-guardn.service';
import { LogInComponent } from '../log-in/log-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CreateTableComponent } from '../create-table/create-table.component';
import { SelectTableComponent } from '../select-table/select-table.component';
import { CreateMenuComponent } from '../create-menu/create-menu.component';
import { EditMenuComponent } from '../edit-menu/edit-menu.component';
import { MenuManageComponent } from '../menu-manage/menu-manage.component';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { TableDetailsComponent } from '../table-details/table-details.component';
import { ReceiptViewComponent } from '../receipt-view/receipt-view.component';
import { ReportMenuComponent } from '../report-menu/report-menu.component';





export const routes: Routes = [
  {path:'',         component: LogInComponent },
  {path:'login',  component: LogInComponent },
  {path:'signup',  component: SignUpComponent },
  {path:'home',   component: MyHomeComponent, canActivate: [AuthGuardService] },
  {path:'create-table',   component: CreateTableComponent, canActivate: [AuthGuardService] },
  {path:'menu-manage',   component: MenuManageComponent, canActivate: [AuthGuardService],
    children:[
      {path: 'create', component: CreateMenuComponent},
      {path: 'edit', component: EditMenuComponent},
      {path: 'edit-item/:id', component: EditItemComponent},
    ]},
  {path:'select-table',   component: SelectTableComponent, canActivate: [AuthGuardService] },
  {path:'table-details/:id',   component: TableDetailsComponent, canActivate: [AuthGuardService]},
  {path:'receipt/:id',   component: ReceiptViewComponent, canActivate: [AuthGuardService]},
  {path: 'report', component: ReportMenuComponent, canActivate: [AuthGuardService]},
  {path:'**', redirectTo: ''}
  ];

