import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username:any;
  isVendor!:boolean;
  userId: any;


  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor( public router: Router,
               private authService: AuthService,
               public layoutService: LayoutService,
     ) { }

  ngOnInit(): void {
    this.getUsersCreds();
    // this.router.navigate(['/login'])

  }

  getUsersCreds(){
    const userData = this.authService.getUserCredentials()
    this.username = userData.name;
    this.userId = userData.userId;
    this.isVendor = userData.isVendor
    console.log('User Data:',userData);

  }

  logOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('isVendor');
    // window.location.reload();
    // this.router.navigate(['/login'])
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  getUser(userId:string){
    this.router.navigateByUrl(`userprofile/${userId}`);
    console.log(userId)

  }
}
