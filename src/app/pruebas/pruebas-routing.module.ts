import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { 
    path: 'proyectos',
    component: ProyectosComponent,
    loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }
