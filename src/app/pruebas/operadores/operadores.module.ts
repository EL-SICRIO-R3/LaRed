import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadoresRoutingModule } from './operadores-routing.module';
import { OperadoresComponent } from './operadores.component';
import { ProyectosModule } from '../proyectos/proyectos.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


@NgModule({
  declarations: [
    OperadoresComponent,
    ListadoComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    OperadoresRoutingModule,
    ProyectosModule
  ]
})
export class OperadoresModule { }
