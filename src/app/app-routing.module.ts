import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './pages/buyers/buyers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { VerifiedvehiclesComponent } from './pages/verifiedvehicles/verifiedvehicles.component';
import { ViewComponent } from './pages/view/view.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SignupComponent } from './shared/signup/signup.component';


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
