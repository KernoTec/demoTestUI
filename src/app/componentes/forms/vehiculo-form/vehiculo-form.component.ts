import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/modelos/vehiculo';
import { VehiculoServiceService } from 'src/app/servicios/vehiculo-service.service';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent {
  vehiculo:Vehiculo=new Vehiculo();
  labelTitulo:string="";

  constructor(private service: VehiculoServiceService,public router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      debugger
      let id = params['id'];
      this.vehiculo = this.service.getVehiculo(id);
      if(this.vehiculo.id!!=""){
        this.labelTitulo="Edicion de Vehiculo";
      }else{
        this.labelTitulo="Registro de Vehiculo";
      }
      });
  }

  add(): void {
    debugger
    delete this.vehiculo.cliente;
    if(this.vehiculo.id!=""){
      
      this.service.edit(this.vehiculo,this.vehiculo.id).subscribe(
        item => {
          debugger
          console.log(item);
          this.router.navigate(['Vehiculos']);
        });
        console.log("clientes");  
    }else{
      this.service.add(this.vehiculo).subscribe(
        item => {
          debugger
          console.log(item);
          this.router.navigate(['Vehiculos']);
        });
        console.log("clientes");
    }
    }
}
