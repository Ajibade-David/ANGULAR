import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-stepperform-ass',
  standalone: true,
  imports: [ CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './stepperform-ass.component.html',
  styleUrl: './stepperform-ass.component.css'
})
export class StepperformAssComponent {
  step = 1;
  formData: any = {};

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(public formbuilder:FormBuilder){}
public formone=this.formbuilder.group({
  firstname:['', [Validators.required, Validators.maxLength(10)]],
  lastname:['', Validators.required],
})
public formtwo=this.formbuilder.group({
  email:['', [Validators.email, Validators.required]],
  phonenumber:['', [Validators.required]],

})
public formthree=this.formbuilder.group({

  address:['',[Validators.required]],

})

submit() {
  const formData = {
    ...this.formone.value,
    ...this.formtwo.value,
    ...this.formthree.value
  };
  console.log(formData);
 
}
}

