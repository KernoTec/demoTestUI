import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8085/api/clientes'; 

  constructor(private http: HttpClient,  private router: Router) { }

  requestListCliente(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  requestNewCliente(cliente: Cliente): Observable<any>{
    return this.http.post<any>(this.baseUrl, cliente);
  }
  
}
