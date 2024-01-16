import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehiclesService } from 'src/app/dashboard/services/vehicles/vehicles.service';

@Component({
  selector: 'app-show-vehicles',
  templateUrl: './show-vehicles.component.html',
  styleUrls: ['./show-vehicles.component.css']
})
export class ShowVehiclesComponent {
  displayedColumns: string[] = ['marca', 'modelo', 'anio', 'placa', 'cliente','acciones'];
  dataSource = new MatTableDataSource();
  dataVehicles:any = [];
  private _vehiclesService = inject(VehiclesService);
  constructor(){
    this.getCustomers();
  }
  getCustomers(){
    this._vehiclesService.getVehicles().subscribe({
      next:data=>{
        this.dataVehicles = data;
        console.log(data)
        this.dataSource = new MatTableDataSource(this.dataVehicles);
      },
      error: error=>console.log(error)
    })
  }
}
