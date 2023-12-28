import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../modelos/vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  private heroesUrl = 'http://localhost:8085/api/vehiculo';
  vehiculo:Vehiculo=new Vehiculo();

  constructor(private http: HttpClient) { }

  getVehiculo(id:string){
    if (this.vehiculo.id==id){
       return this.vehiculo;
    }else{
       return new Vehiculo();
    }
 }

 setVehiculo(vehiculo:Vehiculo){
   this.vehiculo=vehiculo;
 }

 getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.heroesUrl);
}

add(cliente:Vehiculo): Observable<Vehiculo> {
  return this.http.post<Vehiculo>(this.heroesUrl,cliente);
}

edit(vehiculo:Vehiculo,id:string): Observable<Vehiculo> {
  return this.http.put<Vehiculo>(this.heroesUrl+"/"+id,vehiculo);
}

remove(id:string): Observable<any> {
  return this.http.delete<any>(this.heroesUrl+"/"+id);
}

}
