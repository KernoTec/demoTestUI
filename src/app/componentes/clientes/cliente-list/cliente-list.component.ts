import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService
  ) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(): void {
    this.clienteService.requestListCliente().subscribe({
      next: (response) => { console.log(response)
          this.clientes = response;
      }, 
      error: (err) => {
        console.log("err",err);
      }
    });
  }
}
