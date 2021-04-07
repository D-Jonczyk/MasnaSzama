import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourierPanelComponent} from './courier-panel/courier-panel.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RestaurantSummaryComponent} from './Restaurant/restaurant-summary/restaurant-summary.component';
import {MainComponent} from './main/main.component';
import {ClientPanelComponent} from './client-panel/client-panel.component';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {RegisterPanelComponent} from './register-panel/register-panel.component';

const routes: Routes = [
  {path: 'courier-panel', component: CourierPanelComponent},
  {path: 'client-panel', component: ClientPanelComponent},
  {path: 'login-panel', component: LoginPanelComponent},
  {path: 'register-panel', component: RegisterPanelComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'restaurant-summary', component: RestaurantSummaryComponent},
  {path: 'main', component: MainComponent}
  // {path: '', redirectTo: '/courier-panel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
