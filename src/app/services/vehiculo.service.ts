import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private baseUrl = 'http://localhost:8085/api/vehiculos'; 

  constructor(private http: HttpClient,  private router: Router) { }

  requestListVehiculo(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  requestNewVehiculo(vehiculo: Vehiculo): Observable<any>{
    return this.http.post<any>(this.baseUrl, vehiculo);
  }
}
