import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '../data';
import { Router,ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";
// Data
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  id:any='';
  name:any='';
  age:any='';
  hobby:any='';
  gender:any='';
  // Data:any;
  // add(b:any){
  //   console.log(b);
    
  // }
  
  constructor(public service:ServiceService,public router:Router, public actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.id=this.actroute.snapshot.paramMap.get('id');
    this.service.edit(this.id).subscribe((data:any)=>{
      console.log(data);
      // this.id=data[0].id,
      this.name=data[0].username,
      this.age=data[0].age,
      this.hobby=data[0].email,
      this.gender=data[0].gender
  })
}
  // list(id:number){
  //   this.router.navigate(['table'])
  // }
  add(){
    let insertbody={
      username:this.name,
      age:this.age,
      email:this.hobby,
      gender:this.gender
    }
    this.service.insert(insertbody).subscribe((data)=>
    {
      console.log(data);
      
    })
    this.list();
}
update(){
  let updatebody={
    id:this.id,
    username:this.name,
    age:this.age,
    email:this.hobby,
    gender:this.gender
  }
  console.log(updatebody);
  
  this.service.update(updatebody).subscribe((data)=>
  {
    console.log(data);
    
  });
  this.list();
}

list(){
  this.router.navigate(['table']);
}
//  aObj=new Data('priya',20,'cook','female');

}
