import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },  // Define la ruta para el componente
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
