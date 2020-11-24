import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {


  // positions:any=[
  //         "active",    
  //         "active",    
  //         "inactive"    
  //       ];
  subscription: Subscription;
  positions:any;  //To Show availibilty of places (Active, Inactive)

  showParking:boolean=true; //To Show Park if server On

  constructor( private service : MainService) {
      
   }

  getValues() : void {
    this.service.getValues().subscribe( (res)=>{
        if(res !=null ){
          this.showParking=true;
          this.positions=res;
          console.log(res);
        }
    },err => this.showParking=false);
  }



 

    

  ngOnInit() {
     //emit value in sequence every 10 second
    const source = interval(100);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.getValues());
  }

}
