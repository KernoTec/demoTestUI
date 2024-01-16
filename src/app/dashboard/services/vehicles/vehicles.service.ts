import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from 'src/environments/environments';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private httpService = inject(HttpClient);
  private baseUrl = enviroment.baseUrl;
  constructor() { }

  getVehicles(){
    return this.httpService.get(`${this.baseUrl}/vehicles`)
  }
  saveVehicle(vehicle:Vehicle){
    return this.httpService.post(`${this.baseUrl}/vehicles`, vehicle);
  }
  getVehicle(id:number){
    return this.httpService.get<Vehicle>(`${this.baseUrl}/vehicles/${id}`)
  }
  updateVehicle(vehicle:Vehicle, id:number){
    return this.httpService.put(`${this.baseUrl}/vehicles/${id}`, vehicle)
  }
  deleteVehicle(id:number){
    return this.httpService.delete(`${this.baseUrl}/vehicles/${id}`);
  }

}
