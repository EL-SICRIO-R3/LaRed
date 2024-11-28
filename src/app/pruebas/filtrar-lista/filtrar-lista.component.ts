import { Component, OnInit } from '@angular/core';
import { IProduct, products } from '../models/products.model';
import { CommonModule } from '@angular/common';
import { FilterPipe } from "../../pipes/filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './filtrar-lista.component.html'
})
export class FiltrarListaComponent implements OnInit {

  lista: IProduct[] = products;
  searchText: string = "";

  ngOnInit(): void {
    
  }
}
