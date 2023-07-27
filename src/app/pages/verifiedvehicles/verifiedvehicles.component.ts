import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataStorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-verifiedvehicles',
  templateUrl: './verifiedvehicles.component.html',
  styleUrls: ['./verifiedvehicles.component.scss']
})
export class VerifiedvehiclesComponent implements OnInit {
  searchText:string = '';
  vehicles:any;
  verified!:number;
  notverified!:number;
  rows = 10;
  username:any;
  isVendor!:boolean;
  userId: any;

  constructor( private ds:DataStorageService,
               private router: Router,
               private authService: AuthService,
               ) { }

  ngOnInit(): void {
    this.getAllVehicles();
    this.getUsersCreds();

  }

  getUsersCreds(){
    const userData = this.authService.getUserCredentials()
    this.username = userData.name;
    this.userId = userData.userId;
    this.isVendor = userData.isVendor
    console.log('User Data:',userData);

  }

  getAllVehicles(){
    this.ds.adminGetVehicles().subscribe(
      (vehicles) => {
        console.log(vehicles.vehicles);
        this.vehicles = vehicles.vehicles;
        // this.totalRecords = this.vehicles.length;
        // for (const vehicle of this.vehicles) {
        //   this.dates=vehicle.updatedAt
        this.vehicles.sort((a: { updatedAt: string | number | Date; }, b: { updatedAt: string | number | Date; }) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB.getTime() - dateA.getTime();
        });
        const verifiedObjects = this.vehicles.filter((obj: { isVerified: any; }) => obj.isVerified);
        this.verified = verifiedObjects.length;
        const notverifiedObjects = this.vehicles.filter((obj: { isVerified: any; }) => !obj.isVerified);
        this.notverified = notverifiedObjects.length;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getVehicle(vehicleId: string){
    this.router.navigateByUrl(`view/${vehicleId}`);
  }

}

