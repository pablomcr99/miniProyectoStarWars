import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import {PlanetsService} from './servicios/planet-service.service';
import { PlanetsListadoComponent } from './components/planets-listado/planets-listado.component';
import { FilmsListadoComponent } from './components/films-listado/films-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmsListadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
