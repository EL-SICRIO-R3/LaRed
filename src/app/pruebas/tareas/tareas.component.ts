import { Component } from '@angular/core';
import { ITarea, tareas } from '../models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  
  formulario: boolean = false; 
  tareas: ITarea[] = tareas

  col: any = {id: "ID", title: "TITULO", description: "DESCRIPCION", action: "ACCIONES"}
  constructor(){}

  ngOnInit(): void {
    
  }

  onFormulario(){
    this.formulario = !this.formulario
  }

  onAddTask(event: ITarea){
    event.id = this.tareas.length + 1
    this.tareas.push(event)
    this.formulario = false
  }

  onCompleted(event: number){
    this.tareas.filter(x => x.id == event)[0].completed = true
  }
}
