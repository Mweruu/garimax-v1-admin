import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataStorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  users:any;
  username:any;
  isVendor!:boolean;
  userId: any;

  constructor(private ds:DataStorageService,
              private router :Router,
              private authService: AuthService,
              ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getUsersCreds();

  }

  getUsersCreds(){
    const userData = this.authService.getUserCredentials()
    this.username = userData.name;
    this.userId = userData.userId;
    this.isVendor = userData.isVendor
    console.log('User Data:',userData);

  }


  getAllUsers(){
    this.ds.adminGetUsers().subscribe(
      (users) => {
        this.users = users.users;
        console.log(users.users);
        for (const user of this.users){
          console.log(user.copVendor);
          console.log("single",user.singleVendor);

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
