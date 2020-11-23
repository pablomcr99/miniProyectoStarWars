import { Component, OnInit } from '@angular/core';
import {Films} from '../../interface/film-interface';
import {FilmServiceService} from '../../servicios/film-service.service';

@Component({
  selector: 'app-films-listado',
  templateUrl: './films-listado.component.html',
  styleUrls: ['./films-listado.component.css']
})
export class FilmsListadoComponent implements OnInit {

  listadoPeliculas:Films[];
  columnsToDisplay = ['title', 'episode_id','director','producer','release_date'];

  constructor(private filmService:FilmServiceService) { }

  ngOnInit(): void {
    this.cargarPeliculas();
  }
  cargarPeliculas(){
    this.filmService.getFilms().subscribe(resp=>{
      this.listadoPeliculas=resp.results;
    });
  }

}
