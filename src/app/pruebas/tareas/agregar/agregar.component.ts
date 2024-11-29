import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ITarea } from '../../models/tareas';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [InputTextareaModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit{
  
  @Output() onAddEmitter: EventEmitter<ITarea> = new EventEmitter();


  formTarea: FormGroup;

  constructor( private fb: FormBuilder){
    this.formTarea = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  
  ngOnInit(): void {
  }

  onAddTask(){
    if(this.formTarea.valid){
      this.onAddEmitter.emit(this.formTarea.value)
      this.formTarea.reset
    }else{
      
    }
    
  }

  


}
