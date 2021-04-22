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
import { AddRestoComponent } from './admin-panel/add-resto/add-resto.component';
import { ListRestoComponent } from './admin-panel/list-resto/list-resto.component';
import { LoginComponent } from './admin-panel/login/login.component';
import { RegisterComponent } from './admin-panel/register/register.component';
import { UpdateRestoComponent } from './admin-panel/update-resto/update-resto.component';
import { RestaurantOrdersComponent} from './Restaurant/restaurant-orders/restaurant-orders.component';
import {NavigationComponent} from './courier-panel/navigation/navigation.component';

// client imports
import {ClientPanelComponent} from './client-panel/client-panel.component';
import { ClientAdressComponent } from './client-panel/client-adress/client-adress.component';
import { ClientProfileComponent } from './client-panel/client-profile/client-profile.component';
import { OrderHistoryComponent } from './client-panel/order-history/order-history.component';
import { LogoutComponent } from './client-panel/logout/logout.component';
import { UploadComponent } from './client-panel/upload/upload.component';
import {SupportComponent} from './courier-panel/support/support.component';
import {ChatComponent} from './courier-panel/chat/chat.component';
import {CourierOrderhistoryComponent} from './courier-panel/courier-orderhistory/courier-orderhistory.component';
import {OrderCheckoutComponent} from "./Restaurant/order-checkout/order-checkout.component";
import { FavoriteRestaurantComponent } from './client-panel/favorite-restaurant/favorite-restaurant.component';


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
  {path: 'restaurant-orders', component: RestaurantOrdersComponent},
  {path: 'restaurant-menu/:id', component: RestaurantMenuComponent},
  {path: 'add-resto', component: AddRestoComponent},
  {path: 'list-resto', component: ListRestoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'update-resto', component: UpdateRestoComponent},
  {path: 'support', component: SupportComponent},
  {path: 'order-checkout', component: OrderCheckoutComponent},

  // Client Paths
  {path: 'client-panel', component: ClientPanelComponent},
  {path: 'client-adress', component: ClientAdressComponent},
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'orderhistory', component: CourierOrderhistoryComponent},
  {path: 'favorite-restaurant', component: FavoriteRestaurantComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
