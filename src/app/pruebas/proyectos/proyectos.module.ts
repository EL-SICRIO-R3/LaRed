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


@NgModule({
  declarations: [
    ProyectosComponent,
    FiltrarListaComponent,
    IncrementDecrementComponent,
    LoginComponent,
    NavegacionComponent,
    PeticionesHttpComponent,
    ListadoComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    FilterPipe,
    ReactiveFormsModule,
    HttpClientModule,
    FilternumberPipe,
    FormsModule,
    DialogModule
  ],
  providers: [DialogService]
})
export class ProyectosModule { }
