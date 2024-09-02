import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppHeaderComponent implements OnInit{
  search: string="";
  @Output() searchEventEmmiter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  onSearch(){
    this.searchEventEmmiter.emit(this.search)
  }
  
}
