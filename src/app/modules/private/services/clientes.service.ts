import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IClienteResponse} from "../../../api/responses/cliente-response.interface";
import {map, Observable} from "rxjs";
import {DataResponse} from "../../../interfaces/data-response.interface";
import {IClienteRequest} from "../../../api/requests/cliente-request.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly URL: string = 'http://localhost:8085/api';

  constructor(private _httpClient: HttpClient) {
  }

  // Obtener clientes
  public getClientes(): Observable<IClienteResponse[]> {
    return this._httpClient
      .get<DataResponse<IClienteResponse[]>>(`${this.URL}/clientes`)
      .pipe(map(r => r.response));
  }

  // Eliminar un cliente
  public deleteCliente(id: string): Observable<IClienteResponse> {
    return this._httpClient
      .delete<DataResponse<IClienteResponse>>(`${this.URL}/clientes/${id}`)
      .pipe(map(r => r.response));
  }

  // Crear un cliente
  public createCliente(cliente: IClienteRequest): Observable<IClienteResponse> {
    return this._httpClient
      .post<DataResponse<IClienteResponse>>(`${this.URL}/clientes`, cliente)
      .pipe(map(r => r.response));
  }

  // Actualizar un cliente
  public updateCliente(id: string, cliente: IClienteRequest): Observable<IClienteResponse> {
    return this._httpClient
      .put<DataResponse<IClienteResponse>>(`${this.URL}/clientes/${id}`, cliente)
      .pipe(map(r => r.response));
  }

}
