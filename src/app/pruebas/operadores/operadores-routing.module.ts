import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'publicaciones/:id',
    component: PublicacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadoresRoutingModule { }
