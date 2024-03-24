import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiURL = 'http://localhost:8085/'

  constructor(private http:HttpClient) { }

  getAllVehicles(id:any): Observable<any>{
    return this.http.get(this.apiURL + `api/vehiculos/cliente/${id}`)
  }

  postVehicle(id:any,vehicle: any): Observable<any> {
    return this.http.post(this.apiURL + `api/vehiculos/cliente/${id}`, vehicle);
  }

  updateVehicle(id: any, vehicleId: any, vehicle: any): Observable<any> {
    return this.http.put(this.apiURL + `api/vehiculos/cliente/${id}/${vehicleId}`, vehicle);
  }
  getVehiculoById(vehicleId: any): Observable<any> {
    return this.http.get(this.apiURL + `api/vehiculos/${vehicleId}`);
  }
  // deleteVehicle(id:any): Observable<any>{
  //   return this.http.delete(this.apiURL + `api/clientes/${id}`)
  // }
  deleteVehicleByClientId(id: any, vehicleId: any): Observable<any> {
    return this.http.delete(this.apiURL + `api/vehiculos/cliente/${id}/${vehicleId}`);
  }
  
}
