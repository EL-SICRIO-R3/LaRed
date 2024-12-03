import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrarListaComponent } from '../filtrar-lista/filtrar-lista.component';
import { IncrementDecrementComponent } from '../increment-decrement/increment-decrement.component';
import { LoginComponent } from '../login/login.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PeticionesHttpComponent } from '../peticiones-http/peticiones-http.component';
import { ListadoComponent } from './listado/listado.component';
import { DetailsComponent } from '../navegacion/details/details.component';
import { TareasComponent } from '../tareas/tareas.component';
import { OperadoresComponent } from '../operadores/operadores.component';
import { DirectivasComponent } from '../directivas/directivas.component';

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
  {
    path: 'navegacion/detalles/:id',
    component: DetailsComponent
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  { 
    path: 'operadores',
    component: OperadoresComponent,
    loadChildren: () => import('../operadores/operadores.module').then(m => m.OperadoresModule)
  },
  { path: '', redirectTo: 'listado', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
