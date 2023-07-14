import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BuyersComponent } from './buyers/buyers.component';
import { VerifiedvehiclesComponent } from './verifiedvehicles/verifiedvehicles.component';
import { ViewComponent } from './view/view.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:LayoutComponent,
  children :
  [
  {path: 'dashboard', component:DashboardComponent,},
  {path: 'buyers', component:BuyersComponent,},
  {path: 'vendors', component:VendorsComponent,},
  {path: 'vehicles', component:VehiclesComponent,},
  {path: 'verifiedvehicles', component:VerifiedvehiclesComponent,},
  {path: 'view/:vehicleId', component:ViewComponent,},
  {path: 'userprofile/:id', component:UserprofileComponent,}
  ]
},
{path: 'login', component:LoginComponent},
{path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
