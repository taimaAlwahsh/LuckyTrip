import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  countryName: string ;
  city:string;
  description: string;
  img;
  
  constructor() { }
}
