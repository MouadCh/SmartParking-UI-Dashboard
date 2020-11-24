import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // data:any;

  constructor(private http : HttpClient) { }

  getValues(){
    return this.http.get("http://192.168.137.1:8080/data")
  }

}
