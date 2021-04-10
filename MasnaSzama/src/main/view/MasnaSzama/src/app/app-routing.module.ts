import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourierPanelComponent} from './courier-panel/courier-panel.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RestaurantSummaryComponent} from './Restaurant/restaurant-summary/restaurant-summary.component';
import {MainComponent} from './main/main.component';
import {ShowScheduleComponent} from './courier-panel/Schedule/show-schedule/show-schedule.component';
import {ProfileComponent} from './courier-panel/profile/profile.component';
import {OrderlistComponent} from './courier-panel/orderlist/orderlist.component';
import {RestaurantMenuComponent} from './Restaurant/restaurant-menu/restaurant-menu.component';
//import {AddRestoComponent} from './admin-panel/add-resto/add-resto.component';
//import {ListRestoComponent} from './admin-panel/list-resto/list-resto.component';
//import {UpdateRestoComponent} from './admin-panel/update-resto/update-resto.component';
//import {LoginComponent} from './admin-panel/login/login.component';
//import {RegisterComponent} from './admin-panel/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'courier-panel', component: CourierPanelComponent},
  {path: 'show-schedule', component: ShowScheduleComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'restaurant-summary', component: RestaurantSummaryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'main', component: MainComponent},
  {path: 'orderlist', component: OrderlistComponent},
  // {path: '', redirectTo: '/courier-panel', pathMatch: 'full'}
 // {path: 'restaurant-menu/:id', component: RestaurantMenuComponent},
 // {path: 'add-resto', component: AddRestoComponent},
  //{path: 'list-resto', component: ListRestoComponent},
  //{path: 'register', component: RegisterComponent},
  //{path: 'login', component: LoginComponent},
  //{path: 'update-resto', component: UpdateRestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
