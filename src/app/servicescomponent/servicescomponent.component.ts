import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';

@Component({
  selector: 'app-servicescomponent',
  standalone: true,
  imports: [],
  templateUrl: './servicescomponent.component.html',
  styleUrl: './servicescomponent.component.css'
})
export class ServicescomponentComponent {
  constructor(public service:LandingpageserviceService){}
  ngOnInit(){

  
    console.log(this.service.item);
    
  }

}
