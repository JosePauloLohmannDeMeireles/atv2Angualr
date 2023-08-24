import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {
  number!: number;  
  constructor(
    private dataService: DataServiceService,
  ){}

  getNumber(){
    this.number = this.dataService.getRandomNumber()
  }

}
