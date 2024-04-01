import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IVehicle } from 'src/app/models/vehicles.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.css'],
})
export class VehiclesDetailComponent implements OnInit {
  vehicle?: IVehicle;
  vehicleUpdate?: IVehicle;
  formUpdate: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService,
    private form: FormBuilder,
    

  ) {
    this.formUpdate = this.form.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      placa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this.getVehicleByParam(params['vehiculoId']);
        },
      error: (error: any) => {
        console.log(error);
        // this.loading = false;
      },
    });
  }

  getVehicleByParam(id: string): void {
    this._apiService.getVehicle(id).subscribe({
      next: (response: IVehicle) => {
        console.log('El vehiculo buscado es: ', response);
        this.vehicle = response;
      },
      error: (error: any) => {
        console.log(error);
        //this.loading = false;
      },
    });
  }

  updateVehicle(event: Event) {
    event.preventDefault();
    this.vehicleUpdate = {
      id: this.vehicle?.id || '0',
      marca: this.formUpdate.value.marca || this.vehicle?.marca,
      modelo: this.formUpdate.value.modelo || this.vehicle?.modelo,
      anio: Number(this.formUpdate.value.anio) || this.vehicle?.anio,
      placa: this.formUpdate.value.placa || this.vehicle?.placa,
    };

    this._apiService
      .updateVehicle(this.vehicleUpdate.id!!, this.vehicleUpdate)
      .subscribe({
        next: (response: IVehicle) => {
          this.getVehicleByParam(response.id!!);
        },
        error: (error: any) => {
          console.log('El error es: ', error);
        },
      });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formUpdate.get(controlName)?.hasError(errorType) &&
      this.formUpdate.get(controlName)?.touched
    );
  }

 
}
