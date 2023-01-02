import { Component, OnInit } from '@angular/core';
import { CitiesServiceService } from '../services/cities-service.service';
import { Citie } from '../interfaces/citie.interface';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: Citie[];

  constructor(private cities_service:CitiesServiceService) { }

  ngOnInit() {
    this.list_cities();
  }

  list_cities(){
    this.cities_service.get_cities().subscribe(res=>{
      this.cities = res.data;
      console.log(this.cities);
    });
  }

}
