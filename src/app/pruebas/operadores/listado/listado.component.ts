import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/userOperators';
import { OperadoresService } from '../operadores.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit{
  public userList: IUser[] = []
  errorMessage = '';
  private userIdSubject = new BehaviorSubject<number | null>(null);

  col: any = {id: "ID", name: "NOMBRE", description: "EMAIL", porcent: "WEB", phone: 'TELEFONO', action: "DETALLE"}

  constructor(private service: OperadoresService) {
    
  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers().subscribe({
      next: (data) => (this.userList = data),
      error: (error) => (this.errorMessage = error.message),
    })

  }

}
