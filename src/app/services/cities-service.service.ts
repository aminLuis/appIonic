import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { All_cities } from '../interfaces/citie.interface';

const API = 'assets/files/cities.json'

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  constructor(private http:HttpClient) { }

  get_cities():Observable<All_cities>{
    return this.http.get<All_cities>(API);
  }
}
