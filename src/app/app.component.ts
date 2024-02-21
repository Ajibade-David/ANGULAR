import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ContactappComponent } from './contactapp/contactapp.component';
import { ServicescomponentComponent } from './servicescomponent/servicescomponent.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
interface Objectname{
  firstname:string,
  lastname:string,
  age:number
}
interface objectname3{
  firstname:string,
  lastname:string,
  age:number,
  address:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LandingpageComponent, NavbarComponent, CarouselComponent, CardComponent, FooterComponent, ContactappComponent, ServicescomponentComponent, ViewcontactComponent, SigninComponent, SignupComponent],
  // imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';
  public firstname = 'Sunday'
  public age: undefined|number|string|boolean
  public bool = true
  public address: string = 'No 10, Ogbomoso,Oyo State,Nigeria'
  public email: string = 'davidajibade58@gmail.com'
  private lastname = 'Sunday'
  
  public obj1:Objectname={
    firstname:'Daniel',
    lastname: 'Segun', 
    age:23
  }

  public array1:number[]=[45,567,34,10]
  public array2:string[]=['David', 'Lola', 'Samuel', 'Olamide']
  public array3:(number|string|boolean)[]=[12,'Dave', true]
  public array4:objectname3[]=[
    {
      firstname:'Doyin',
      lastname:'Samsudeen',
      age:34,
      address:'Ogbomoso'
    },
    {
      firstname:'Dave',
      lastname:'David',
      age:34,
      address:'Ogbomoso'
    }
  ]
public school:any=false
  checkindex(i:number){
    console.log(i);
    
  }
  public firstStyling = 'form-control w-25 ms-3 my-3'
  public special= true
  check(){
    this.special=! this.special
    console.log(this.special);
    
  }
  ngOnInit() {
    this.firstname = 'Tobi'
    console.log(this.firstname);
    console.log(this.lastname);
    for (let index = 0; index < this.array3.length; index++) {
      const element = this.array3[index];
      console.log(element);
      
      
    }
    
    this.age = false

  }
}
