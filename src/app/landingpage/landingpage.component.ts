import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule,NavbarComponent, CarouselComponent, CardComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
public first_name=''
public email=''
public phone_number=''
public address=''
public lastname=''
public gender=''
public special=true
public buttonstyle = 'btn btn-success'
public styles='form-control my-2 ms-2 w-25'
addContent(){
  this.special =!this.special
  
}
}
