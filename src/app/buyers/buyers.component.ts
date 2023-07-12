import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss']
})
export class BuyersComponent implements OnInit {
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
