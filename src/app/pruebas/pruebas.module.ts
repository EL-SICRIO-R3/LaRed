import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarListaComponent } from './filtrar-lista/filtrar-lista.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { LoginComponent } from './login/login.component';
import { PeticionesHttpComponent } from './peticiones-http/peticiones-http.component';
import { PruebasComponent } from './pruebas.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FilternumberPipe } from '../pipes/filternumber.pipe';
import { PeticionesServiceService } from './peticiones-http/peticiones-service.service';
import { PruebasRoutingModule } from './pruebas-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    PruebasComponent
  ],
  imports: [
    PruebasRoutingModule,
    CommonModule
  ],
  providers: [PeticionesServiceService]
})
export class PruebasModule { }
