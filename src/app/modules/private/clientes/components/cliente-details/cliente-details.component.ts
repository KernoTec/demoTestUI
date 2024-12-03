import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {
  clienteId: string;

  constructor(private route: ActivatedRoute) {
    this.clienteId = ''
  }

  ngOnInit(): void {
    // Obtén el parámetro 'id' desde la ruta
    this.route.paramMap.subscribe(params => {
      this.clienteId = params.get('id')!;
      console.log('Cliente ID:', this.clienteId);
      // Aquí puedes cargar los detalles del cliente basado en el ID
    });
  }
}
