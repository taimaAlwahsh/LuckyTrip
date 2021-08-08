import { Component, Input, OnInit } from '@angular/core';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  

  

  constructor(
    // using service to pass data between components.
    private service :PassDataService
  ) { }

  ngOnInit() {
   console.log( this.service.countryName);
  }


}
