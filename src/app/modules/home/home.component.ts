import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { IComponent } from '../../models/components';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: IComponent[] = [];
  dataFiltrada: IComponent[] = [];
  @Input() search: string = "";
  
  constructor(private dataService: DataService){

  }
  
  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos(){
    this.dataService.getData().subscribe(response =>{
      this.data=response;
      this.dataFiltrada = this.data
    })
  }

  filtrarProyectos(){
    if(this.search.length>0){
      this.dataFiltrada = this.data.filter(item => item.name.includes(this.search))
    }else{
      this.dataFiltrada = this.data
    }
  }

 

}
