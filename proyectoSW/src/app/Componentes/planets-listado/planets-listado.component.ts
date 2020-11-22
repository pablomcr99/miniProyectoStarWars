import { Component, OnInit } from '@angular/core';
import {Planet} from '../../Interfaces/i-planet';
import {PlanetsService} from '../../Servicios/services/planets.service'

@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.css']
})
export class PlanetsListadoComponent implements OnInit {

  listadoPlanetas: Planet[];
  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];
  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
       this.listadoPlanetas = resp.results;
    });
  }

}
