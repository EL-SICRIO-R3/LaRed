import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ChatComponent } from './modules/chat/chat.component';
import { PruebasComponent } from './pruebas/pruebas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent }, // Define la ruta para el componente
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: 'pruebas',
        component: PruebasComponent,
        loadChildren: () => import('./pruebas/pruebas.module').then(m => m.PruebasModule)
    },
    { path: '**', redirectTo: '/pruebas', }

];
