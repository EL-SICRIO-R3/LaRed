import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private dataService: DataService){

  }
  
  ngOnInit(): void {
    this.dataService.getData().subscribe(response =>{
     console.log(response)
    })
  }

 

}
