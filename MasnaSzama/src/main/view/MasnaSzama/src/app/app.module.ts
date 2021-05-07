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
import {CurrencyPipe, Location} from '@angular/common';
import { MenuMakerService } from './admin-panel/menu-maker.service';
import { OrderService } from './admin-panel/overview/order.service';
import { MenuMakerComponent } from './admin-panel/menu-maker.component';

// Client imports
import { ClientAdressComponent } from './client-panel/client-adress/client-adress.component';
import { ClientProfileComponent } from './client-panel/client-profile/client-profile.component';
import { OrderHistoryComponent } from './client-panel/order-history/order-history.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { LogoutComponent } from './client-panel/logout/logout.component';
import { UploadComponent } from './client-panel/upload/upload.component';


import { RestaurantOrdersComponent } from './Restaurant/restaurant-orders/restaurant-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './courier-panel/navigation/navigation.component';
import { SupportComponent } from './courier-panel/support/support.component';
import { OrderCheckoutComponent } from './Restaurant/order-checkout/order-checkout.component';
import { ChatComponent } from './courier-panel/chat/chat.component';
import { CourierOrderhistoryComponent } from './courier-panel/courier-orderhistory/courier-orderhistory.component';
import { CategoriesComponent } from './admin-panel/categories/categories.component';
import { HeroComponent } from './admin-panel/hero/hero.component';
import { ItemsComponent } from './admin-panel/items/items.component';
import { MenusComponent } from './admin-panel/menus/menus.component';
import { OptionsComponent } from './admin-panel/options/options.component';
import { OverviewComponent } from './admin-panel/overview/overview.component';
import { OrderItemComponent } from './admin-panel/overview/order-item/order-item.component';
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
    RestaurantOrdersComponent,
    NavigationComponent,
    OrderCheckoutComponent,
    MenuMakerComponent,

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
     CategoriesComponent,
     HeroComponent,
     ItemsComponent,
     MenusComponent,
     OptionsComponent,
     OverviewComponent,
     OrderItemComponent,
     ListRestoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)    // kompilujemy, usuwamy, kompilujemy 2 raz, działa i wklejamy na nowo XD
  ],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe, MenuMakerService, OrderService]
})
export class AppModule
{
}
