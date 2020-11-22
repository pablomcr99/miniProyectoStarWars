import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanetRespuesta } from '../interface/planet-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets():Observable<PlanetRespuesta> {
    const authURL="https://swapi.dev/api/planets";
    let requestOptions=new HttpHeaders;
    return this.http.get<PlanetRespuesta>(
       authURL
    );
}


  
}
