import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../datastorage.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles:any;
  verified!:number
  notverified!:number
  searchText:string = '';
  first: number = 0;
  username:any;
  isVendor!:boolean;
  userId: any;

   @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  constructor( private ds:DataStorageService,
               public router: Router,
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

  onSearchTextEntered(searchValue:string){
    this.searchText =searchValue;
    console.log(1,this.searchText)
  }


}
