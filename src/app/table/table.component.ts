import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  getalldata:any;
  id:any;

  constructor(public service:ServiceService, public router:Router, public actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get();
  }

  get(){
    this.service.get().subscribe((data)=>{
      this.getalldata=data;
    })
  }
  
  edit(id:number){
    console.log(id);
    
    this.router.navigate(['form',id])
  }
  delete(id:number){
    this.service.delete(id).subscribe((data:any)=>{
      console.log(data);
      })
      this.get();
  }

  list(id:string|null){
    this.router.navigate(['form'])
  }

}
