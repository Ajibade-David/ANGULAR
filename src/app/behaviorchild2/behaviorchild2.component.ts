import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviorchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviorchild2.component.html',
  styleUrl: './behaviorchild2.component.css'
})
export class Behaviorchild2Component {
constructor(public behavior:BehaviorService){}
public firstname=''
public behavior_obj=<any>{}
edit(){
 
  // Send the updated object to the behavior service
  this.behavior.behavior.next(this.behavior_obj.firstname );
}
ngOnInit(){
  console.log( this.behavior.behavior);
  this.behavior.behavior.subscribe(response=>{
    console.log(response);
    this.behavior_obj=response
    console.log(this.behavior_obj);
    
    this.firstname = this.behavior_obj.firstname;
  })

}
}
