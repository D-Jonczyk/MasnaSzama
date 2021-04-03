import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourierPanelComponent } from './courier-panel/courier-panel.component';
import { AdminPanelComponent} from "./admin-panel/admin-panel.component";
import { RestaurantSummaryComponent } from './Restaurant/restaurant-summary/restaurant-summary.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CourierPanelComponent,
    AdminPanelComponent,
    RestaurantSummaryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
