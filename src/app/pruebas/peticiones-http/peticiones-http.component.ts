import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeticionesServiceService } from './peticiones-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilternumberPipe } from "../../pipes/filternumber.pipe";

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones-http.component.html'
})
export class PeticionesHttpComponent  implements OnInit{
  
  list: any[] = []
  searchNumber: any;
  
  constructor(private service: PeticionesServiceService){}

  ngOnInit(): void {
    this.searchNumber = null
    this.getData()
  }

  getData(){
    this.service.getData().subscribe(result=>{
      this.list = result
    })
  }



}
