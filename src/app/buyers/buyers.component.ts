import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../datastorage.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss']
})
export class BuyersComponent implements OnInit {
  users:any;

  constructor(private ds:DataStorageService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(){
    this.ds.getUsers().subscribe(
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
