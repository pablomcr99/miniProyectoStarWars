import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import {PlanetsService} from './servicios/planet-service.service';
import { PlanetsListadoComponent } from './components/planets-listado/planets-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    
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
