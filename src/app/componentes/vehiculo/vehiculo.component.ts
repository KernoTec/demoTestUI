import { ClienteServiceService } from 'src/app/servicios/cliente-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { VehiculoServiceService } from 'src/app/servicios/vehiculo-service.service';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {

  showAsignar:Boolean=true;
  showbtn:Boolean=true;
  vehiculos:Vehiculo[]=[];
  clienteAsing:Cliente=new Cliente();
  vehiculoAsing:Vehiculo=new Vehiculo();

  constructor(private service: VehiculoServiceService,private router: Router,private serviceCliente:ClienteServiceService) {
  
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {

    this.service.getVehiculos().subscribe(
      items => {
        this.vehiculos = items;
      });
      console.log("clientes");
  }

  remove(vehiculo:Vehiculo): void {
    debugger
    this.service.remove(vehiculo.id).subscribe(
      items => {
        debugger
        console.log(items);
        this.getAll();
        this.showAsignar=true;
      });
      console.log("clientes");
  }

  goEdit(vehiculo:Vehiculo):void {
    debugger
    this.service.setVehiculo(vehiculo);
    this.router.navigate(["/VehiculoForm/"+vehiculo.id]);
  }

  mostrarAsing(vehiculo:Vehiculo){
    this.showAsignar=false;
    this.vehiculoAsing=vehiculo;
  }

  buscar(docid:number): void {
    debugger
    this.serviceCliente.findByid(docid).subscribe(
      item => {
        this.clienteAsing=item;
        debugger
        this.showbtn=false;
      });
      console.log("clientes");
  }

  asignar(): void {
     this.vehiculoAsing.cliente=this.clienteAsing;
     this.service.edit(this.vehiculoAsing,this.vehiculoAsing.id).subscribe(
      item => {
        debugger
        console.log(item);
        this.router.navigate(['Clientes']);
      });
      console.log("clientes");  
  }

}
