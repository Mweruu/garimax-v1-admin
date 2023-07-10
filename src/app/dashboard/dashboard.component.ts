import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vehicles:any;
  verified!:number
  notverified!:number
  records!:number;
  buyers!:number;
  vendors!:number;
  users:any;

  constructor(private ds:DataStorageService) { }

  ngOnInit(): void {
    this.getAllVehicles();
    this.getAllUsers();
  }

  getAllVehicles(){
    this.ds.getVehicles().subscribe(
      (vehicles) => {
        this.vehicles=vehicles.vehicles
        console.log(vehicles.vehicles);
        console.log(vehicles.vehicles.length);
        this.records = vehicles.vehicles.length;
        
        const verifiedObjects = this.vehicles.filter((obj: { isVerified: any; }) => obj.isVerified);
        this.verified = verifiedObjects.length;
        console.log('Number of vendor objects:',this.verified );

        const notverifiedObjects = this.vehicles.filter((obj: { isVerified: any; }) => !obj.isVerified);
        this.notverified = notverifiedObjects.length;
        console.log('Number of vendor objects:',this.notverified );

      },
      (error) => {
        console.error(error);
      }
    );

  }

  getAllUsers(){
    this.ds.getUsers().subscribe(
      (users) => {
        console.log(users.users);
        this.users = users.users
        const vendorObjects = this.users.filter((obj: { isVendor: any; }) => obj.isVendor);
        this.vendors = vendorObjects.length;
        console.log('Number of vendor objects:',this.vendors );
        const buyerObjects = this.users.filter((obj: { isVendor: any; }) => !obj.isVendor);
        this.buyers = buyerObjects.length;
        console.log('Number of vendor objects:',this.buyers );

          },
      (error) => {
        console.error(error);
      }
    );

  }

}
