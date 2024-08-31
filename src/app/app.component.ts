import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullLayoutModule } from './containers/full-layout/full-layout.module';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FullLayoutModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LaRed';
}
