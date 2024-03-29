import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviorchild1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './behaviorchild1.component.html',
  styleUrl: './behaviorchild1.component.css'
})
export class Behaviorchild1Component {
  constructor(public behavior:BehaviorService){}
public behavior_array:any=[
  {
    firstname:'Johnson',
    lastname:'Isreal',
    age:'45',
    email:'Isreal@gmail.com',
  },
  {
    firstname:'Elon',
    lastname:'Musk',
    age:'46',
    email:'elonmusk@gmail.com',
  },
  {
    firstname:'Captain',
    lastname:'College',
    age:'12',
    email:'captain@gmail.com',
  }
]
sendlist(list:any){
console.log(list);
this.behavior.behavior.next(list)

}
updateFirstname(newFirstname: string, index: number) {
  this.behavior_array[index].firstname = newFirstname;
  this.sendlist(this.behavior_array);
}
}
