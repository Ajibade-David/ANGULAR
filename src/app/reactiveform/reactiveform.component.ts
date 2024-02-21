import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  public firstname:any=""
constructor(public formbuilder:FormBuilder){}
public formone=this.formbuilder.group({
  firstname:['', [Validators.required, Validators.maxLength(10)]],
  lastname:['', Validators.required],
  email:['', [Validators.email, Validators.required]],
  password:['', [Validators.required, Validators.minLength(5)]],
})
public formtwo=this.formbuilder.group({
firstname2:['', [Validators.required, Validators.maxLength(10)]],
lastname2:['', Validators.required],
email2:['', [Validators.email, Validators.required]],
password2:['', [Validators.required, Validators.minLength(5)]],
})
public formthree=this.formbuilder.group({
firstname3:['', [Validators.required, Validators.maxLength(10)]],
lastname3:['', Validators.required],
email3:['', [Validators.email, Validators.required]],
password3:['', [Validators.required, Validators.minLength(5)]],
})
submitformone(){
  console.log(this.formone.value);
  this.firstname=this.formone.value['firstname']

}
ngOnInit(){
  console.log(this.formone.value);
  console.log(this.formone.value['email']);
  this.firstname= this.formone.value['email'];

  // this.formone.controls['firstname'].setValue('')
  this.formone.controls['email'].setValue('')
  this.formone.controls['password'].setValue('')
  this.formone.controls['password'].setValue('')
  
}
}
