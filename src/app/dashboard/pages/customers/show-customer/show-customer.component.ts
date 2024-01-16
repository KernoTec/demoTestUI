import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/dashboard/services/customers/customers.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})

export class ShowCustomerComponent {
  displayedColumns: string[] = ['nombres', 'paterno', 'materno', 'tipoDocumento', 'ci', 'fechaNacimiento', 'genero','acciones'];
  dataSource = new MatTableDataSource();
  dataCustomers:any = [];
  private _customerService = inject(CustomersService);
  constructor(){
    this.getCustomers();
  }
  getCustomers(){
    this._customerService.getCustomers().subscribe({
      next:data=>{
        this.dataCustomers = data;
        console.log(data)
        this.dataSource = new MatTableDataSource(this.dataCustomers);
      },
      error: error=>console.log(error)
    })
  }
}
