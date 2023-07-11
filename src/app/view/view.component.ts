import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DataStorageService } from 'src/app/datastorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ENGINE, ELECTRICALS, TRANSMISSION_AND_CLUTCH, SUSPENSION_STEERING, TESTDRIVE, EXTERIOR, INTERIOR, AIRCONDITIONING_SYSTEM } from '../const-data/constants';
import { timer } from 'rxjs';

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
    selectedOptions:{ name: string, key: string }[] = [];;
    assessment:any =[];

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
              private messageService: MessageService,
              private router: Router,
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
    console.log(555,this.vehicle);
    this.vehicle.isVerified = true

    const vehicleData = {
      verifiedVehicle:this.vehicle,
      // assessment: this.selectedOptions.map(option => option.name),
      assessment: this.selectedOptions.length > 0 ? this.selectedOptions.map(option => option.name) : []

    }
    console.log(54434,vehicleData)
    console.log(54434,this.currentVehicleId)
    this.ds.adminUpdateVehicle(this.currentVehicleId, vehicleData).subscribe(response => {
      console.log("names gothere");
      console.log('Vehicle Updated successfully!', response);
      this.vehicle = response

      this.messageService.add({
        severity:'success',
        summary:'Success',
        detail:'Please wait for our team to verify your updated vehicle'
      })
      timer(2500).toPromise().then(()=>{
        this.router.navigate(['/'])
      })
    },
    error => {
      console.error('Failed to update vehicle:', error);
      // Handle error response here
      this.messageService.add({
        severity:'error',
        summary:'Error',
        detail:'Failed to update vehicle'
      })

      }
    );
    timer(2500).toPromise().then(()=>{
      this.router.navigate(['/'])
    })
  }

  onCheckboxChange() {
    const names = this.selectedOptions.map(option => option.name);
    console.log("names",names);
  }

}
