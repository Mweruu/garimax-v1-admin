import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataStorageService } from 'src/app/datastorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ENGINE, ELECTRICALS, TRANSMISSION_AND_CLUTCH, SUSPENSION_STEERING, TESTDRIVE, EXTERIOR, INTERIOR, AIRCONDITIONING_SYSTEM } from '../const-data/constants';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {


    items!: MenuItem[];
    vehicle:any = {};
    activeItem!: MenuItem;
    currentVehicleId!:string;
    fetched = false;
    position: string = 'bottom';
    selectedTab!: string;
    images =[];
    engines:any = ENGINE;
    electricals:any = ELECTRICALS;
    clutches:any = TRANSMISSION_AND_CLUTCH;
    suspensions:any = SUSPENSION_STEERING;
    testdrives:any = TESTDRIVE;
    exteriors:any = EXTERIOR;
    interiors:any = INTERIOR;
    airsystems:any = AIRCONDITIONING_SYSTEM;
    visible: boolean = false;
    contactVisible = false;
    chatVisible =false;
    thumbnailUrl!:string;
    currentUserId!:string;
    user:any;
    userId:any;
    email:any;
    firstName:any;
    phoneNumber:any;
    rating:any;
    value: number = 4;

    responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];


  constructor(private ds:DataStorageService,
              private activatedRoute: ActivatedRoute,
              ) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['vehicleId']){
        this.currentVehicleId = params['vehicleId'];
        console.log("ID:",this.currentVehicleId)
        this.ds.getVehicle(this.currentVehicleId).subscribe(vehicle => {
          this.vehicle = vehicle;
          console.log("DATA", vehicle)
          console.log(vehicle.userId)

          this.images = vehicle.images
        });
      }
    });
      this.items = [
            { label: 'Inspection Cert', icon: 'pi pi-fw pi-check-circle', command: () => this.selectTab('Inspection Cert')},
            { label: 'Engine', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Engine')},
            { label: 'Electricals', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Electricals') },
            { label: 'Transmissson & Clutch', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Transmissson & Clutch') },
            { label: 'Suspension & Steering', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Suspension & Steering') },
            { label: 'Test Drive', icon: 'pi pi-check-circle',command: () => this.selectTab('Test Drive') },
            { label: 'Exterior', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Exterior') },
            { label: 'Interior', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Interior') },
            { label: 'Airconditioning System', icon: 'pi pi-fw pi-check-circle',command: () => this.selectTab('Airconditioning System')}

        ];
      this.activeItem = this.items[1];
      this.selectTab('Engine')
  }

  // async getSingleVehicle(vehicleId: string) {
  //   try {
  //     const vehicle = await this.ds.getVehicle(vehicleId).toPromise();
  //     this.vehicle = vehicle;
  //     this.fetched = true;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

    selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onTabChange(event: any) {
    this.selectedTab = event.index;
  }


  showDialog() {
      this.visible = true;
  }
  showDialogs() {
    this.contactVisible = true;
  }
  showChatDialog() {
    this.chatVisible = true;
  }

  verify(){
    console.log(this.vehicle);
    // const vehicleData = {
    this.vehicle.isVerified = true
    // }
    // this.ds.updateVehicle(this.currentVehicleId, vehicleData).subscribe(response => {
    //   console.log('Vehicle Updated successfully!', response);
    //   this.vehicle = response
    // });
  }

}
