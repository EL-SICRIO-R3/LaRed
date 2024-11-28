import { Component, OnInit } from '@angular/core';
import { PeticionesServiceService } from '../peticiones-http/peticiones-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html'
})
export class NavegacionComponent implements OnInit{
 
  data: any[] = []

  col: any = {id: "ID", name: "NOMBRE", description: "DESCRIPCION", porcent: "PORCENTAJE", action: "DETALLE"}

  constructor(private service: PeticionesServiceService, private dialogService: DialogService){}


  ngOnInit(): void {
    this.getData()
    
  }

  getData(){
    this.service.getData().subscribe(result =>{
      this.data = result
    })
  }

}
