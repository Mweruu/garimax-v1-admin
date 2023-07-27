import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataStorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss']
})
export class BuyersComponent implements OnInit {
  users:any;
  totalRecords!:number;
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
        const buyerObjects = this.users.filter((obj: { isVendor: any; }) => !obj.isVendor);
        this.totalRecords = buyerObjects.length;
        console.log('Number of vendor objects:',this.totalRecords );
        console.log(users.users);

      },
      (error) => {
        console.error(error);
      }
    );

  }

  getUser(userId:string){
    this.router.navigateByUrl(`userprofile/${userId}`);

  }
}
