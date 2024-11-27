import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrarListaComponent } from '../filtrar-lista/filtrar-lista.component';
import { IncrementDecrementComponent } from '../increment-decrement/increment-decrement.component';
import { LoginComponent } from '../login/login.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PeticionesHttpComponent } from '../peticiones-http/peticiones-http.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'filtrar',
    component: FiltrarListaComponent
  },
  {
    path: 'contador',
    component: IncrementDecrementComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'navegacion',
    component: NavegacionComponent
  },
  {
    path: 'peticiones',
    component: PeticionesHttpComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  { path: '', redirectTo: 'listado', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
