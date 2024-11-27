import { Component, OnInit } from '@angular/core';
import { product, products } from '../models/products.model';
import { CommonModule } from '@angular/common';
import { FilterPipe } from "../../pipes/filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule],
  templateUrl: './filtrar-lista.component.html'
})
export class FiltrarListaComponent implements OnInit {

  lista: product[] = products;
  searchText: string = "";

  ngOnInit(): void {
    
  }
}
