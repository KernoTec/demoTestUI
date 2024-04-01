import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAssign, IAssigned } from 'src/app/models/assigns.model';
import { IClient } from 'src/app/models/clients.model';
import { IVehicle } from 'src/app/models/vehicles.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css'],
})
export class AsignacionesComponent implements OnInit {
  assigns?: IAssign[];
  clients?: IClient[] = [];
  vehicles?: IVehicle[] = [];
  allClients?: IClient[] = [];
  allVehicles?: IVehicle[] = [];

  clientVehicle?: IAssigned[] = [];
  formRegist: FormGroup;

  constructor(private _apiService: ApiService, private form: FormBuilder) {
    this.formRegist = this.form.group({
      clienteAsignar: ['', Validators.required],
      vehiculoAsignar: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllAssigns();
  }

  getAllAssigns(): void {
    this._apiService.getAllAssigns().subscribe((data: IAssign[]) => {
      this.assigns = data;
      this.getClients(this.assigns);
      this.getVehicles(this.assigns);
      this.getAllClients();
      this.getAllVehicles();
    });
  }

  getClients(data: IAssign[]) {
    data.map((assign, index) => {
      this._apiService
        .getClient(assign.cliente_id!!)
        .subscribe((data: IClient) => {
          this.clients!![index] = data;
        });
    });
  }

  getVehicles(data: IAssign[]) {
    data.map((assign, index) => {
      this._apiService
        .getVehicle(assign.vehiculo_id!!)
        .subscribe((data: IVehicle) => {
          this.vehicles?.push(data);
          this.clientVehicle!![index] = {
            id_cliente: this.clients!![index].id,
            nombreCliente: this.clients!![index].nombre,
            apellidoCliente: this.clients!![index].paterno,
            documentoCliente: this.clients!![index].numero_de_documento,
            id_vehiculo: data.id!!,
            marcaVehiculo: data.marca!!,
            modeloVehiculo: data.modelo!!,
            placaVehiculo: data.placa!!,
          };
        });
    });
  }

  getAllClients() {
    this._apiService.getAllClients().subscribe((data) => {
      this.allClients = data;
    });
  }

  getAllVehicles() {
    this._apiService.getAllVehicles().subscribe((data) => {
      this.allVehicles = data;
    });
  }

  registAssign(event: Event) {
    event.preventDefault();
    this._apiService
      .saveAssign({
        cliente_id: this.formRegist.value.clienteAsignar,
        vehiculo_id: this.formRegist.value.vehiculoAsignar,
      })
      .subscribe(() => {
        this.getAllAssigns();
      });
  }
}
