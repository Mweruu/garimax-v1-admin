import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  items!: MenuItem[];
  // sidebarVisible: boolean = true;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;



  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {

  this.items = [
    {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vehicles'
    },
    {
    label: 'Vendors',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vendors'
    },
    {
    label: 'Buyers',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vehicles'
    },
    {
    label: 'Vehicle',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vehicles'
    },
    {
    label: 'Verified Vehicles',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vehicles'
    },
    {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    routerLink:'/vehicles'
    },
  ]
  }
}




