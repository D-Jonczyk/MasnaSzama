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
import { CurrencyPipe} from '@angular/common';


// Client imports
import { ClientAdressComponent } from './client-panel/client-adress/client-adress.component';
import { ClientProfileComponent } from './client-panel/client-profile/client-profile.component';
import { OrderHistoryComponent } from './client-panel/order-history/order-history.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { LogoutComponent } from './client-panel/logout/logout.component';
import { UploadComponent } from './client-panel/upload/upload.component';


import { ComponentsComponent } from './admin-panel/components/components.component';
import { ModelsComponent } from './admin-panel/models/models.component';
import { ServicesComponent } from './admin-panel/services/services.component';
import { SharedComponent } from './admin-panel/shared/shared.component';
import { CategoriesComponent } from './admin-panel/components/categories/categories.component';
import { DailyeatingsComponent } from './admin-panel/components/dailyeatings/dailyeatings.component';
import { FoodsComponent } from './admin-panel/components/foods/foods.component';
import { MenuComponent } from './admin-panel/components/menu/menu.component';
import { UsersComponent } from './admin-panel/components/users/users.component';
import { InterfacesComponent } from './admin-panel/services/interfaces/interfaces.component';

import { RestaurantOrdersComponent } from './Restaurant/restaurant-orders/restaurant-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './courier-panel/navigation/navigation.component';
import { SupportComponent } from './courier-panel/support/support.component';
import { OrderCheckoutComponent } from './Restaurant/order-checkout/order-checkout.component';
import { ChatComponent } from './courier-panel/chat/chat.component';
import { CourierOrderhistoryComponent } from './courier-panel/courier-orderhistory/courier-orderhistory.component';

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
    RestaurantOrdersComponent,
    NavigationComponent,
    OrderCheckoutComponent,

// Client modules
     ClientAdressComponent,
     ClientPanelComponent,
     OrderHistoryComponent,
     ClientProfileComponent,
     LogoutComponent,
     UploadComponent,
     SupportComponent,
     OrderCheckoutComponent,
     ChatComponent,
     CourierOrderhistoryComponent,
     ComponentsComponent,
     ModelsComponent,
     ServicesComponent,
     SharedComponent,
     CategoriesComponent,
     DailyeatingsComponent,
     FoodsComponent,
     MenuComponent,
     UsersComponent,
     InterfacesComponent,

  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe]
})
export class AppModule
{
}
