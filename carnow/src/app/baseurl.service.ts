import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  public baseurl : string = 'http://localhost:3000/';
  constructor() { }
  
  getBaseUrl() {
    return this.baseurl;
  }
}
