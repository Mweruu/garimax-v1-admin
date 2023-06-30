import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyersComponent } from './buyers/buyers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    TopbarComponent,
    FooterComponent,
    DashboardComponent,
    BuyersComponent,
    VendorsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    CardModule,
    TagModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
