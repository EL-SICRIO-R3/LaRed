import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { NavegacionComponent } from './navegacion.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    DetailsComponent]
})
export class NavegationModule { }