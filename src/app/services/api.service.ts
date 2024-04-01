import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../models/clients.model';
import { IVehicle } from '../models/vehicles.model';
import { IAssign } from '../models/assigns.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://localhost:3000'

  constructor(private _httpClient: HttpClient) { }

  public getAllClients(): Observable<IClient[]>{
    return  this._httpClient.get<IClient[]>(`${this.baseURL}/clientes`)
  }

  public getClient(id:string): Observable<IClient>{
    return this._httpClient.get<IClient>(`${this.baseURL}/clientes/${id}`)
  }

  public deleteClient(id: string):Observable<IClient>{
    return this._httpClient.delete<IClient>(`${this.baseURL}/clientes/${id}`);
  }

  public updateClient(id: string, client : IClient):Observable<IClient>{
    return this._httpClient.put<IClient>(`${this.baseURL}/clientes/${id}`, client);
  }

  public createClient(client: IClient):Observable<IClient> {
    return this._httpClient.post<IClient>(`${this.baseURL}/clientes`, client)
  }


  public getAllVehicles(): Observable<IVehicle[]>{
    return this._httpClient.get<IVehicle[]>(`${this.baseURL}/vehiculos`)
  }

  public getVehicle(id: string): Observable<IVehicle>{
    return this._httpClient.get<IVehicle>(`${this.baseURL}/vehiculos/${id}`)
  }

  public deleteVehicle(id: string): Observable<IVehicle>{
    return this._httpClient.delete<IVehicle>(`${this.baseURL}/vehiculos/${id}`)
  }

  public updateVehicle(id: string, vehicle : IVehicle):Observable<IVehicle>{
    return this._httpClient.put<IVehicle>(`${this.baseURL}/vehiculos/${id}`, vehicle);
  }

  public createVehicle(vehicle: IVehicle):Observable<IVehicle> {
    return this._httpClient.post<IVehicle>(`${this.baseURL}/vehiculos`, vehicle)
  }


  public getAllAssigns(): Observable<IAssign[]>{
    return this._httpClient.get<IAssign[]>(`${this.baseURL}/asignaciones`)
  }

  public saveAssign(data: IAssign):Observable<IAssign>{
    return this._httpClient.post<IAssign>(`${this.baseURL}/asignaciones`, data)
  }
}
