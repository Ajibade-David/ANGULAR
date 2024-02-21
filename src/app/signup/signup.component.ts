import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface{
  firstname:string,
  lastname:string,
  email:string,
  address:string,
  password:string,
  age:string,
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor( public routes:Router){}
public firstname='';
public lastname='';
public age='';
public email='';
public password='';
public address='';
public message='';
public studentarray:StudentInterface[]=[]


signUp(){
  let StudentObj:StudentInterface={
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    age:this.age,
    password:this.password,
    address:this.address,
  }
  this.studentarray.push(StudentObj)
  localStorage.setItem('students', JSON.stringify(this.studentarray))
if (this.studentarray) {
  this.routes.navigate(['/signin'])
} else {
  this.message='Registratio Failed'
}
}
}

