import { Component, OnInit } from '@angular/core';
import { IProyecto, proyectos } from '../../models/proyectos.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{
  
  proyectos: IProyecto[] = proyectos

  col: any = {id: "ID", name: "NOMBRE", description: "DESCRIPCION", porcent: "PORCENTAJE", action: "DETALLE"}
  constructor(){}

  ngOnInit(): void {
    
  }



}
