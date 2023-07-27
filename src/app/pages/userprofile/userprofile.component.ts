import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  currentUserId:any;
  user:any;

  constructor(private ds:DataStorageService,
              private activatedRoute: ActivatedRoute,
              ) { }

  async ngOnInit(){
    // console.log(this.activatedRoute.params)
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']){
            this.currentUserId = params['id'];
            console.log("ID:",this.currentUserId)
        this.ds.getUser(this.currentUserId).subscribe(user => {
          this.user = user;
          console.log("DATA", user)})
      }
    });
    console.log("gothere")

  }

}
