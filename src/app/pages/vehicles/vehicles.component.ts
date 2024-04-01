import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from 'src/app/models/clients.model';
import { IVehicle } from 'src/app/models/vehicles.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiculosComponent implements OnInit {
  vehiclesList: IVehicle[] = [];
  formRegist: FormGroup;
  vehiceRegist?: IVehicle;

  constructor(private _apiService: ApiService, private form: FormBuilder) {
    this.formRegist = this.form.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      placa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllVehiclesFromApi();
  }

  getAllVehiclesFromApi(): void {
    this._apiService.getAllVehicles().subscribe((data: IVehicle[]) => {
      this.vehiclesList = data;
    });
  }

  deleteVehicleById(id?: string): void {
    //if (confirm('¿Desea elimin
    if (id) {
      this._apiService.deleteVehicle(id).subscribe((data: IVehicle) => {
        console.log('Vehiculo Borrado', data);
        this.getAllVehiclesFromApi();
      });
    }
  }

  registVehicle(event: Event) {
    event.preventDefault();

    this.vehiceRegist = this.formRegist.value;

    if (this.vehiceRegist) {
      this._apiService
        .createVehicle(this.vehiceRegist)
        .subscribe((data: IVehicle) => {
          this.getAllVehiclesFromApi();
        });
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formRegist.get(controlName)?.hasError(errorType) &&
      this.formRegist.get(controlName)?.touched
    );
  }
}
