import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:4000';

  get(){
    return this.http.get(this.url+ '/getall');
  }
  insert(insertbody:any){
    return this.http.post(this.url+ '/insert', insertbody);
  }
  edit(id:string|null){
    return this.http.get(this.url+ '/edit/' +id);
  }
  update(updatebody:any){
    return this.http.put(this.url+ '/update', updatebody)
  }
  delete(id:number){
    return this.http.put(this.url+ '/delete',{id:id});
  }
  


}
