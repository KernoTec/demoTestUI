import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:8085/'

  constructor(private http:HttpClient) { }

  postUser(user:any):Observable<any>{
    return this.http.post(this.apiURL + "api/clientes", user)
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.apiURL + "api/clientes")
  }

  deleteUser(id:any): Observable<any>{
    return this.http.delete(this.apiURL + `api/clientes/${id}`)
  }

  updateUser(id:number,user:any):Observable<any>{
   return this.http.put(this.apiURL + `api/clientes/${id}`,user)
  }

  getUserById(id:any):Observable<any>{
    return this.http.get(this.apiURL + `api/clientes/${id}`)
  }
}


