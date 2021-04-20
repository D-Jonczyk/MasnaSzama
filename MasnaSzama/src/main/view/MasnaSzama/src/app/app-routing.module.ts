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
import {RestaurantOrdersComponent} from './Restaurant/restaurant-orders/restaurant-orders.component';
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

import { FoodListComponent } from "./admin-panel/components/foods/list.component";
import { AddFoodComponent } from "./admin-panel/components/foods/add.component";
import { AddCategoryComponent } from "./admin-panel/components/categories/add.component";
import { ListCategoriesComponent } from "./admin-panel/components/categories/list.component";
import { AddDailyEatingComponent } from "./admin-panel/components/dailyeatings/add.component";


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
  {path: 'support', component: SupportComponent},
  {path: 'components', component: ComponentsComponent},
  {path: 'models', component: ModelsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'shared', component: SharedComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'dailyeatings', component: DailyeatingsComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'users', component: UsersComponent},
  {path: 'interfaces', component: InterfacesComponent},
  {path: 'foods', component: FoodListComponent },
  {path: 'foods/create', component: AddFoodComponent },
  {path: 'foods/create/:id', component: AddFoodComponent },
  {path: 'categories', component: ListCategoriesComponent },
  {path: 'categories/create', component: AddCategoryComponent },
  {path: 'categories/create/:id', component: AddCategoryComponent },
  {path: 'dailyeatings', component: AddDailyEatingComponent },





  // Client Paths
  {path: 'client-panel', component: ClientPanelComponent},
  {path: 'client-adress', component: ClientAdressComponent},
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'orderhistory', component: CourierOrderhistoryComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
