import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourierPanelComponent} from "./courier-panel/courier-panel.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const routes: Routes = [
  {path: 'courier-panel', component: CourierPanelComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: '', redirectTo: '/courier-panel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
