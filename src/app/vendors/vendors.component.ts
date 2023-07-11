import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  users:any;

  constructor(private ds:DataStorageService) { }

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

}
