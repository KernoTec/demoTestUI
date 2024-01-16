import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private httpService = inject(HttpClient);
  private baseUrl = enviroment.baseUrl;
  constructor() {}

  getVehicles(term:string){
    console.log(term)
    return this.httpService.get<any>(`${this.baseUrl}/customers?_embed=vehicles&ci=${term}`)
    .pipe(
      map(element=>{
        return element.map((data:any)=>data.vehicles)
      })
    )
  }



}
