import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService, public el: ElementRef) { }

  ngOnInit(): void {
    this.model = [
      {
          label: 'ADMIN NAVIGATOR',
          items: [
              { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
              { label: 'Client', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
              { label: 'Vehicles', icon: 'pi pi-fw pi-car', routerLink: ['/'] },
              { label: 'Buyers', icon: 'pi pi-fw pi-user', routerLink: ['/'] },
              { label: 'Vendors', icon: 'pi pi-fw pi-users', routerLink: ['/'] },

          ]
      },
    ]
  }
}
