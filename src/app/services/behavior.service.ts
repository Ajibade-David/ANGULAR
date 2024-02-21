import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  constructor() { }
  public behavior=new BehaviorSubject<any>({})
  // public behavior=new BehaviorSubject<any>({
  //   firstname:'',
  //   lastname:'dell',
  //   age:'23',
  //   email:'davidajibade58@gmail.com',
  // })
}
