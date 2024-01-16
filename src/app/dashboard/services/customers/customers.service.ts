import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from 'src/environments/environments';
import { Customer } from '../../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private httpService = inject(HttpClient);
  private baseUrl = enviroment.baseUrl;
  constructor() { }

  getCustomers(){
    return this.httpService.get<Customer[]>(`${this.baseUrl}/customers`)
  }
  saveCustomer(customer:Customer){
    return this.httpService.post(`${this.baseUrl}/customers`, customer);
  }
  getCustomer(id:number){
    return this.httpService.get<Customer>(`${this.baseUrl}/customers/${id}`)
  }
  updateCustomer(customer:Customer, id:number){
    return this.httpService.put(`${this.baseUrl}/customers/${id}`, customer)
  }
  deleteCustomer(id:number){
    return this.httpService.delete(`${this.baseUrl}/customers/${id}`);
  }

}
