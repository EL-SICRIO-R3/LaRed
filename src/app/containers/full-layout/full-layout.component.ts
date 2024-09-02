import { Component } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
  search: string = "";


  onSearch(event: any){
    console.log(event)
  }

}


