import { Component, OnInit } from '@angular/core';
import { All_customer, Customer } from '../interfaces/customer.interface';
import { CustomersServiceService } from '../services/customers-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private customer_service:CustomersServiceService) { }

  customers: Customer[];

  ngOnInit() {
    this.list_customers();
  }

  list_customers(){
    this.customer_service.get_customers().subscribe(res=>{
      this.customers = res.data;
      console.log(this.customers);
    });
  }

}
