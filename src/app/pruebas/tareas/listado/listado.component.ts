import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITarea, tareas } from '../../models/tareas';
import { CommonModule } from '@angular/common';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';

@Component({
  selector: 'tbody[app-listado]',
  standalone: true,
  imports: [CommonModule, DynamicDialogModule],
  providers: [DialogService],
  templateUrl: './listado.component.html'
})
export class ListadoComponentTareas implements OnInit{

  @Input() tareas!: ITarea[];
  @Output() onCompletedEmitter: EventEmitter<number> = new EventEmitter();
  
  constructor(public dialogService: DialogService){
    
  }

  ngOnInit(): void {
  }

  onCompleted(id: number){
    this.onCompletedEmitter.emit(id)
  }
  


}

