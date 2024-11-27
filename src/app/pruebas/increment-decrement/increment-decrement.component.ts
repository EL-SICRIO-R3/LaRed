import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment-decrement.component.html'
})
export class IncrementDecrementComponent implements OnInit {

  contador: number = 0;

  constructor(){}

  ngOnInit(): void {
  }

  onIncrement(){
    this.contador++;
  }

  onDecrement(){
    this.contador--;
  }

  onReset(){
    this.contador = 0;
  }
}
