import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '../data';
// Data
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name:any;
  // Data:any;
  add(b:any){
    console.log(b);
    
  }
 aObj=new Data('priya',20,'cook','female');

}
