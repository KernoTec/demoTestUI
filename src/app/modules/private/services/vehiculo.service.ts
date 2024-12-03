import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IVehiculoResponse} from "../../../api/responses/vehiculo-response.interface";
import {DataResponse} from "../../../interfaces/data-response.interface";
import {IVehiculoRequest} from "../../../api/requests/vehiculo-request.interface";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private readonly URL: string = 'http://localhost:8085/api'

  constructor(private _httpClient: HttpClient) {
  }

  public getVehiculos(): Observable<IVehiculoResponse[]> {
    return this._httpClient.get<DataResponse<IVehiculoResponse[]>>(`${this.URL}/vehiculos`)
      .pipe(map(r => r.response))
  }

  public deleteVehiculo(id: string): Observable<IVehiculoResponse> {
    return this._httpClient
      .delete<DataResponse<IVehiculoResponse>>(`${this.URL}/vehiculos/${id}`)
      .pipe(map(r => r.response));
  }

  public createVehiculo(vehiculo: IVehiculoRequest): Observable<IVehiculoResponse> {
    return this._httpClient.post<DataResponse<IVehiculoResponse>>(`${this.URL}/vehiculos`, vehiculo)
      .pipe(map(r => r.response))
  }

  public updateVehiculo(id: string, vehiculo: IVehiculoRequest): Observable<IVehiculoResponse> {
    return this._httpClient.put<DataResponse<IVehiculoResponse>>(`${this.URL}/vehiculos/${id}`, vehiculo)
      .pipe(map(r => r.response))
  }
}
