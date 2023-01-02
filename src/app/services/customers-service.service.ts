import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { All_customer, Customer } from '../interfaces/customer.interface';

const API = 'assets/files/customers.json';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  constructor(private http:HttpClient) { }

  get_customers():Observable<All_customer>{
    return this.http.get<All_customer>(API);
  }

}
