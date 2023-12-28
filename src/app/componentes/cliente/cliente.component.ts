import { Cliente } from 'src/app/modelos/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClienteServiceService } from './../../servicios/cliente-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/modelos/vehiculo';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  clientes:Cliente[]=[];
  vehiculos:Vehiculo[]=[];
  showAsignados:Boolean=true;

  constructor(private service: ClienteServiceService,private router: Router) {
  
  }

  

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {

    this.service.getClientes().subscribe(
      items => {
        this.clientes = items;
      });
      console.log("clientes");
  }

  remove(cliente:Cliente): void {
    debugger
    this.service.remove(cliente.id).subscribe(
      items => {
        debugger
        console.log(items);
        this.getAll();
        this.showAsignados=true;
      });
      console.log("clientes");
  }

  goEdit(cliente:Cliente):void {
    debugger
    this.service.setCliente(cliente);
    this.router.navigate(["/ClienteForm/"+cliente.id]);
  }

  verAsignados(vehiculos:Vehiculo[]){
    this.vehiculos=vehiculos;
    this.showAsignados=false;
  }
}
