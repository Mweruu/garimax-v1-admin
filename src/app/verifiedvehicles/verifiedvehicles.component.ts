import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifiedvehicles',
  templateUrl: './verifiedvehicles.component.html',
  styleUrls: ['./verifiedvehicles.component.scss']
})
export class VerifiedvehiclesComponent implements OnInit {

  vehicles:any;
  verified!:number
  notverified!:number

  constructor( private ds:DataStorageService,
               private router: Router) { }

  ngOnInit(): void {
    this.getAllVehicles()
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
        const verifiedObjects = this.vehicles.filter((obj: { isVerified: any; }) => !obj.isVerified);
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

