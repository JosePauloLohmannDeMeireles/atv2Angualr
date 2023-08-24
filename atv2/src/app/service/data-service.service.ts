import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getRandomNumber(){
    return Math.floor(Math.random() * 101);
  }
}
