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


import { RestaurantOrdersComponent } from './Restaurant/restaurant-orders/restaurant-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './courier-panel/navigation/navigation.component';
import { SupportComponent } from './courier-panel/support/support.component';
import { OrderCheckoutComponent } from './Restaurant/order-checkout/order-checkout.component';
import { ChatComponent } from './courier-panel/chat/chat.component';
import { CourierOrderhistoryComponent } from './courier-panel/courier-orderhistory/courier-orderhistory.component';
import { CreateMenuComponent } from './admin-panel/create-menu/create-menu.component';
import { CreateTableComponent } from './admin-panel/create-table/create-table.component';
import { EditItemComponent } from './admin-panel/edit-item/edit-item.component';
import { EditMenuComponent } from './admin-panel/edit-menu/edit-menu.component';
import { LogInComponent } from './admin-panel/log-in/log-in.component';
import { MenuManageComponent } from './admin-panel/menu-manage/menu-manage.component';
import { MyHomeComponent } from './admin-panel/my-home/my-home.component';
import { NavBarComponent } from './admin-panel/nav-bar/nav-bar.component';
import { ReceipViewComponent } from './admin-panel/receip-view/receip-view.component';
import { ReportMenuComponent } from './admin-panel/report-menu/report-menu.component';
import { RouterComponent } from './admin-panel/router/router.component';
import { SelectTableComponent } from './admin-panel/select-table/select-table.component';
import { SignUpComponent } from './admin-panel/sign-up/sign-up.component';
import { TableDetailsComponent } from './admin-panel/table-details/table-details.component';

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
     CreateMenuComponent,
     CreateTableComponent,
     EditItemComponent,
     EditMenuComponent,
     LogInComponent,
     MenuManageComponent,
     MyHomeComponent,
     NavBarComponent,
     ReceipViewComponent,
     ReportMenuComponent,
     RouterComponent,
     SelectTableComponent,
     SignUpComponent,
     TableDetailsComponent,

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
