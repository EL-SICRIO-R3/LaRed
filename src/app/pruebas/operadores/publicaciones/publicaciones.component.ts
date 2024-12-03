import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPublication } from '../../models/userOperators';
import { OperadoresService } from '../operadores.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html'
})
export class PublicacionesComponent implements OnInit{
  private id: number
  private errorMessage: string = ''
  public publicationList: IPublication[] = []

  constructor(private route: ActivatedRoute, private service: OperadoresService) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }


  ngOnInit(): void {
    
    this.getPublication(this.id)
  }

  getPublication(id: number){
    this.service.getUserById(id).subscribe({
      next: (data) => {this.publicationList = data},
      error: (error) => (this.errorMessage = error.message),
    })
  }

}
