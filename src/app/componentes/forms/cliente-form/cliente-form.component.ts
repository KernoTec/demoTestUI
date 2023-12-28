import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteServiceService } from 'src/app/servicios/cliente-service.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
    
    cliente:Cliente=new Cliente();
    labelTitulo:string="";

    constructor(private service: ClienteServiceService,public router: Router,private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        debugger
        let id = params['id'];
        this.cliente = this.service.getCliente(id);
        if(this.cliente.id!!=""){
          this.labelTitulo="Edicion de Cliente";
        }else{
          this.labelTitulo="Registro de Cliente";
        }
        });
    }

    add(): void {
      debugger
      if(this.cliente.id!=""){
        this.service.edit(this.cliente,this.cliente.id).subscribe(
          item => {
            debugger
            console.log(item);
            this.router.navigate(['Clientes']);
          });
          console.log("clientes");  
      }else{
        this.service.add(this.cliente).subscribe(
          item => {
            debugger
            console.log(item);
            this.router.navigate(['Clientes']);
          });
          console.log("clientes");
      }
      }
      
}
