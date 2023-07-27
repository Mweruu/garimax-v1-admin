import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
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
import { PanelModule } from 'primeng/panel';
import { ThumbnailsDirective } from './thumbnails.directive';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';

import { BuyersComponent } from './pages/buyers/buyers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { VerifiedvehiclesComponent } from './pages/verifiedvehicles/verifiedvehicles.component';
import { ViewComponent } from './pages/view/view.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SignupComponent } from './shared/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    DashboardComponent,
    BuyersComponent,
    VendorsComponent,
    VehiclesComponent,
    VerifiedvehiclesComponent,
    ViewComponent,
    UserprofileComponent,
    ThumbnailsDirective,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
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
    PasswordModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
