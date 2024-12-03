import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {IVehiculoResponse} from "../../../../../api/responses/vehiculo-response.interface";
import {VehiculoService} from "../../../services/vehiculo.service";

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {
  clienteId: string;
  public vehiculos$: Observable<IVehiculoResponse[]>;

  constructor(private route: ActivatedRoute, private _vehiculoService: VehiculoService) {
    this.clienteId = '';
    this.vehiculos$ = new Observable<IVehiculoResponse[]>();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clienteId = params.get('id')!;
      console.log('Cliente ID:', this.clienteId);
      this.vehiculos$ = this._vehiculoService.getVehiculosByIdCliente(this.clienteId);
    });
  }
}
