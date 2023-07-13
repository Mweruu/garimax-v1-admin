import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HttpClientModule } from '@angular/common/http';
import { VerifiedvehiclesComponent } from './verifiedvehicles/verifiedvehicles.component';
import { ViewComponent } from './view/view.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PanelModule } from 'primeng/panel';
import { ThumbnailsDirective } from './thumbnails.directive';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

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
    VehiclesComponent,
    VerifiedvehiclesComponent,
    ViewComponent,
    UserprofileComponent,
    ThumbnailsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    CardModule,
    TagModule,
    ImageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ImageModule,
    DividerModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule,
    ButtonModule,
    CarouselModule,
    CheckboxModule,
    TabMenuModule,
    RatingModule,
    ToastModule,
    TableModule,
    PanelModule,
    PaginatorModule,
    PanelMenuModule,
    SidebarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
