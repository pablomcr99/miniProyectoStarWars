import { Injectable } from '@angular/core';
import {Films} from '../interface/film-interface';
import {FilmResponse} from '../interface/film-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private http: HttpClient) { }


  getFilms():Observable<FilmResponse>{
    const authURL="https://swapi.dev/api/films/";
    return this.http.get<FilmResponse>(authURL);
  }
}
