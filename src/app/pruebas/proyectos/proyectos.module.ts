import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { FiltrarListaComponent } from '../filtrar-lista/filtrar-lista.component';
import { IncrementDecrementComponent } from '../increment-decrement/increment-decrement.component';
import { LoginComponent } from '../login/login.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PeticionesHttpComponent } from '../peticiones-http/peticiones-http.component';
import { ProyectosComponent } from './proyectos.component';
import { ListadoComponent } from './listado/listado.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilternumberPipe } from '../../pipes/filternumber.pipe';
import {DialogModule} from 'primeng/dialog';
import { DialogService } from "primeng/dynamicdialog";
import { DetailsComponent } from '../navegacion/details/details.component';
import { TareasComponent } from '../tareas/tareas.component';
import { AgregarComponent } from '../tareas/agregar/agregar.component';
import { ListadoComponentTareas } from '../tareas/listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProyectosComponent,
    FiltrarListaComponent,
    IncrementDecrementComponent,
    LoginComponent,
    NavegacionComponent,
    PeticionesHttpComponent,
    ListadoComponent,
    DetailsComponent,
    TareasComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    FilterPipe,
    ReactiveFormsModule,
    HttpClientModule,
    FilternumberPipe,
    FormsModule,
    DialogModule,
    AgregarComponent,
    ListadoComponentTareas
    
  ],
  providers: [DialogService]
})
export class ProyectosModule { }
