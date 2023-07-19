import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  users:any;



  constructor(private ds:DataStorageService,
              private router :Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(){
    this.ds.adminGetUsers().subscribe(
      (users) => {
        this.users = users.users;
        console.log(users.users);
        for (const user of this.users){
          console.log(user.copVendor);
          console.log("single",user.singleVendor);
          // console.log(user.copVendor['address']);

        }
      },
      (error) => {
        console.error(error);
      }
    );

  }
  getUser(userId:string){
    this.router.navigateByUrl(`userprofile/${userId}`);
    console.log(userId)

  }

}
