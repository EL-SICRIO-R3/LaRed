import { Component } from '@angular/core';
import { FiltrarListaComponent } from './filtrar-lista/filtrar-lista.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [FiltrarListaComponent, IncrementDecrementComponent, LoginComponent],
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent {

}
