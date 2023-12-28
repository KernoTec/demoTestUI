import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private heroesUrl = 'http://localhost:8085/api/cliente';
  cliente:Cliente=new Cliente();
  

  constructor(private http: HttpClient) { }

  getCliente(id:string){
     if (this.cliente.id==id){
        return this.cliente;
     }else{
        return new Cliente();
     }
  }

  setCliente(cliente:Cliente){
    this.cliente=cliente;
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.heroesUrl);
  }

  add(cliente:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.heroesUrl,cliente);
  }

  edit(cliente:Cliente,id:string): Observable<Cliente> {
    return this.http.put<Cliente>(this.heroesUrl+"/"+id,cliente);
  }

  remove(id:string): Observable<any> {
    return this.http.delete<any>(this.heroesUrl+"/"+id);
  }

  findByid(docid:number): Observable<Cliente> {
    return this.http.get<Cliente>(this.heroesUrl+"/"+docid);
  }
}
