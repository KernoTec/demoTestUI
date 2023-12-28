import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Vehiculo[];

  constructor(
    private vehiculoService: VehiculoService
  ) {
    this.vehiculos = [];
  }

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(): void {
    this.vehiculoService.requestListVehiculo().subscribe({
      next: (response) => { console.log(response)
          this.vehiculos = response;
      }, 
      error: (err) => {
        console.log("err",err);
      }
    });
  }

}
