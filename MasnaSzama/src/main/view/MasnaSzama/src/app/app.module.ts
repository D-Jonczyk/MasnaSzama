import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourierPanelComponent } from './courier-panel/courier-panel.component';
import { AdminPanelComponent} from "./admin-panel/admin-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    CourierPanelComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
