import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ChatComponent } from './modules/chat/chat.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent }, // Define la ruta para el componente
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', }
];
