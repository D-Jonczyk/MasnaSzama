import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }      from '@angular/common';


import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { routes } from './router/router.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuardService } from './auth-guardn.service';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthService } from './auth.service';
import { TableService } from './table.service';
import { ReportService } from './report.service';

import {  Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { CreateTableComponent } from './create-table/create-table.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { ReceiptViewComponent } from './receipt-view/receipt-view.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditItemComponent } from './edit-item/edit-item.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReportMenuComponent } from './report-menu/report-menu.component';

import { DataTableModule } from "angular2-datatable";



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}



@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    NavBarComponent,
    LogInComponent,
    SignUpComponent,
    CreateTableComponent,
    SelectTableComponent,
    CreateMenuComponent,
    TableDetailsComponent,
    ReceiptViewComponent,
    MenuManageComponent,
    EditMenuComponent,
    EditItemComponent,
    ReportMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: false
    }),
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    DataTableModule,
    CommonModule,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuardService,
    AuthService,
    TableService,
    ReportService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
