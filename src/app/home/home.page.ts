import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  destinations = 
    [
      {"destination":
      {"id":89,"city":"Milan","country_name":"Italy","airport_name":"Milan","country_code":"IT",
    "latitude":45.6739,"longitude":9.70417,"iata_code":"BGY","iata_parent_id":0,"is_enabled":"yes","temperature":0,
    "original_destination_id":89,"adventure_flag":3,"nightlife_flag":3,"culture_flag":5,"romantic_flag":4,
    "food_flag":4,"hot_flag":0,"beach_flag":0,"sports_flag":0,"winter_sports_flag":5,"chill_flag":3,"off_grid_flag":0,
    "winter_flag":5,
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/destinations\/italy-milan.jpg"}
    ,"description":{"id":1210,"object_id":89,"object_type":"destination","description_type":"description",
    "text":"This one-time Roman capital is a regular Kate Moss - timeless, stylish and beautiful... But sometimes coked up, shoeless and grungy. \r\n\r\nMilan gets fashion. With some of the best shopping in the world and an unrivalled taste in design for centuries, get your insta boner on and explore classic art and domineering architecture. \r\n\r\nIf the buzz gets too much head out to the stunning Lake Como. ",
    "language_code":"en","translated":1},"top_fives_new_flag":0,"top_fives_updated_flag":0},
    "activities":[{"id":2204,"destination_id":89,"name":"The Restless Earth","city":"Milan","country_code":"IT",
    "country_name":"Italy","currency_code":"EUR","start_day":28,"start_year":2017,"start_month":4,"end_day":20,
    "end_year":2017,"end_month":8,"start_timestamp":1493337600,"end_timestamp":1503187200,"minimum_days":1,"price":8,
    "latitude":45.472368,"longitude":9.173962,"adventure_flag":0,"nightlife_flag":0,"culture_flag":1,"romantic_flag":0,
    "chill_flag":0,"food_flag":0,"hot_flag":0,"beach_flag":0,"sports_flag":0,"winter_sports_flag":0,"off_grid_flag":0,
    "winter_flag":0,"type":"one_time_event",
    "booking_url":"http:\/\/www.fondazionenicolatrussardi.com\/Exhibitions\/The+Restless+Earth.html?pager_page=1",
    "tripadvisor_url":"","is_enabled":"yes",
    "provider":"luckytrip",
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/activities\/2204.jpg"},
    "description":{"id":20791,"object_id":2204,"object_type":"activity","description_type":"description",
    "text":"*Donald Trump puts fingers in ears and whistles*\r\n\r\nMigrant stories are told through video, photos and people\u2019s real objects at this powerful exhibition.\r\n\r\n60 artists contributed, hoping to open up conversation about immigration and war.\r\n\r\nEntry to the exhibition is \u20ac8 at La Triennale di Milano.",
    "language_code":"en","translated":1},"top_fives_position":1},
    {"id":1694,"destination_id":89,"name":"Comics at WOW Spazio Fumetto","city":"Milan","country_code":"IT",
    "country_name":"Italy","currency_code":"GBP","start_day":null,"start_year":null,"start_month":null,"end_day":null,
    "end_year":null,"end_month":null,"start_timestamp":null,"end_timestamp":null,"minimum_days":1,"price":0,"latitude":45.4632,
    "longitude":9.22501,"adventure_flag":1,"nightlife_flag":0,"culture_flag":1,"romantic_flag":0,"chill_flag":0,"food_flag":0,
    "hot_flag":0,"beach_flag":0,"sports_flag":0,"winter_sports_flag":0,"off_grid_flag":0,"winter_flag":0,"type":"activity",
    "booking_url":"http:\/\/www.museowow.it\/wow\/en\/","tripadvisor_url":"","is_enabled":"yes","provider":"luckytrip",
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/activities\/fb\/c6\/fbc6b134aa575.jpg"},
    "description":{"id":1062,"object_id":1694,"object_type":"activity","description_type":"description","text":"Comic book guy eyes you from behind the counter, slurpee in hand, as you wander the stalls of colourful illustrations and retro comic books. \r\n\r\nThis former sweet factory, and then bus depot, is now a fully fledged nerd store surrounded by street murals. \r\n\r\n\u201cWorst description ever\u201d. ",
    "language_code":"en","translated":1},"top_fives_position":1},
    {"id":1698,"destination_id":89,"name":"Gawp at \u2018The Last Supper\u2019","city":"Milan","country_code":"IT",
    "country_name":"Italy","currency_code":"GBP","start_day":null,"start_year":null,"start_month":null,"end_day":null,
    "end_year":null,"end_month":null,"start_timestamp":null,"end_timestamp":null,"minimum_days":1,"price":6,
    "latitude":45.4659,"longitude":9.1715,"adventure_flag":0,"nightlife_flag":0,"culture_flag":1,"romantic_flag":1,
    "chill_flag":0,"food_flag":0,"hot_flag":0,"beach_flag":0,"sports_flag":0,"winter_sports_flag":0,"off_grid_flag":0,
    "winter_flag":0,"type":"activity","booking_url":"http:\/\/www.cenacolovinciano.net","tripadvisor_url":"",
    "is_enabled":"yes","provider":"luckytrip",
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/activities\/19\/c9\/19c91594aa575.jpg"},
    "description":{"id":1066,"object_id":1698,"object_type":"activity","description_type":"description",
    "text":"Damaged and fragile, the world\u2019s most iconic fresco is still slap in your face beautiful. \r\n\r\nDa Vinci used an experimental mix of paint, the Dominicans hacked off Jesus\u2019 feet, then restorers came and removed a whole layer of the scene. Idioti. \r\n\r\nNo matter though - it\u2019s insane. Book in advance on the website. ",
    "language_code":"en","translated":1},"top_fives_position":1},{"id":2248,"destination_id":89,"name":"Terraforma Festival","city":"Milan","country_code":"IT",
    "country_name":"Italy","currency_code":"EUR","start_day":29,"start_year":2018,"start_month":6,"end_day":1,"end_year":2018,"end_month":7,
    "start_timestamp":1530230400,"end_timestamp":1530403200,"minimum_days":1,"price":32,"latitude":9.095196,"longitude":45.556023,
    "adventure_flag":1,"nightlife_flag":1,"culture_flag":1,"romantic_flag":0,"chill_flag":0,"food_flag":0,"hot_flag":0,
    "beach_flag":0,"sports_flag":0,"winter_sports_flag":0,"off_grid_flag":0,"winter_flag":0,"type":"one_time_event",
    "booking_url":"http:\/\/www.terraformafestival.com\/","tripadvisor_url":"","is_enabled":"yes","provider":"luckytrip",
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/activities\/2248.jpg"},
    "description":{"id":22794,"object_id":2248,"object_type":"activity","description_type":"description",
    "text":"Terraforma is \u2018the process in which life on a planet becomes possible through the creation of an atmosphere.\u201d\r\n\r\nWhich means... they bring together artists, installations and ideas, add some of the top names in techno aaand throw the whole lot into a rural palace in Italy.  \r\n\r\nTickets are \u20ac32 for a day or \u20ac120 for three with camping and it\u2019s a 30 minute train from Milan.\r\n",
    "language_code":"en","translated":1},"top_fives_position":1},{"id":472,"destination_id":89,"name":"Dinner on a 1920s tram",
    "city":"Milan","country_code":"IT",
    "country_name":"Italy","currency_code":"GBP","start_day":null,"start_year":null,"start_month":null,"end_day":null,
    "end_year":null,"end_month":null,"start_timestamp":null,"end_timestamp":null,"minimum_days":1,"price":50,"latitude":45.4696,
    "longitude":9.17771,"adventure_flag":0,"nightlife_flag":0,"culture_flag":0,"romantic_flag":1,"chill_flag":1,"food_flag":1,
    "hot_flag":0,"beach_flag":0,"sports_flag":0,"winter_sports_flag":1,"off_grid_flag":0,"winter_flag":1,"type":"activity",
    "booking_url":"http:\/\/www.atm.it\/en\/AltriServizi\/TempoLibero\/Pages\/atmosfera.aspx",
    "tripadvisor_url":"http:\/\/www.tripadvisor.co.uk\/Attraction_Review-g187849-d1969079-Reviews-Tram_Ristorante_ATMosfera-Milan_Lombardy.html",
    "is_enabled":"yes","provider":"luckytrip",
    "thumbnail":{"image_type":"thumbnail","image_url":"https:\/\/devapi.luckytrip.co.uk\/images\/activities\/ITALY_MILAN_26.jpg"},
    "description":{"id":455,"object_id":472,"object_type":"activity","description_type":"description",
    "text":"Does what it says on the tin. \r\n\r\nCatch the 7:45pm or 8pm tram from Via Beltrami and try a fusion of traditional and contemporary Milanese food with a different view for each course. \r\n\r\nDecorated in authentic 1920s style, ATMosfera is simply tram-endous. HAHA. \r\n\r\nPrice shown is for a 4 course meal.",
    "language_code":"en","translated":1},"top_fives_position":1}]}];

    filteredCountries :any;
    countryName ;
    city;
    img;
    discription;
    
  constructor(
    private router:Router,
    private service: PassDataService,
   
  ) {}

  ngOnInit(){}

  searchForCountry(value){
    
    if (value.trim() == '') {
      console.log(value);
      this.filteredCountries = {};
      return;
    }
    

    let filteredArray = this.destinations.filter(element => {
      if (element.destination.country_name.toLowerCase().includes(value.trim().toLowerCase()) || element.destination.city.toLowerCase().includes(value.trim().toLowerCase())) {
           return true;
      }
      return false;
    });

    if (!filteredArray || filteredArray.length == 0) {
      this.filteredCountries = filteredArray;
     
    }else{
      for(let filtered of filteredArray){
        // fill service data if filteredArray. length > 1
       this.service.countryName= filtered.destination.country_name;
       console.log( this.service.countryName);
       this.service.city = filtered.destination.city;
       console.log(this.service.city);
       this.service.description = filtered.destination.description.text;
       console.log(this.service.description);
       this.service.img = filtered.destination.thumbnail.image_url;
       console.log(this.service.img);
      
      }

    }

    this.filteredCountries = filteredArray;
    console.log(this.filteredCountries);
    
  }

  async goSearch(){
    this.router.navigate(['/result']);
    
  
  }

}
