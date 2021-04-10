import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourierPanelComponent } from './courier-panel/courier-panel.component';
import { AdminPanelComponent} from './admin-panel/admin-panel.component';
import { RestaurantSummaryComponent } from './Restaurant/restaurant-summary/restaurant-summary.component';
import { MainComponent } from './main/main.component';
import { ShowScheduleComponent } from './courier-panel/Schedule/show-schedule/show-schedule.component';
import { SendAvailabilitiesComponent } from './courier-panel/Schedule/send-availabilities/send-availabilities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './courier-panel/profile/profile.component';
import { OrderlistComponent } from './courier-panel/orderlist/orderlist.component';
import { RestaurantMenuComponent } from './Restaurant/restaurant-menu/restaurant-menu.component';
import { UpdateRestoComponent } from './admin-panel/update-resto/update-resto.component';
import { LoginComponent } from './admin-panel/login/login.component';
import { RegisterComponent } from './admin-panel/register/register.component';
import { AddRestoComponent } from './admin-panel/add-resto/add-resto.component';
import { ListRestoComponent } from './admin-panel/list-resto/list-resto.component';


@NgModule({
  declarations: [
    AppComponent,
    CourierPanelComponent,
    AdminPanelComponent,
    RestaurantSummaryComponent,
    MainComponent,
    ShowScheduleComponent,
    SendAvailabilitiesComponent,
    ProfileComponent,
    OrderlistComponent,
    RestaurantMenuComponent,
    UpdateRestoComponent,
    LoginComponent,
    RegisterComponent,
    AddRestoComponent,
    ListRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
