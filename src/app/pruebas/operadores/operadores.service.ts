import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError} from 'rxjs';
import { IPublication, IUser } from '../models/userOperators';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  URL: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }


  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.URL + '/users').pipe(
      catchError((error) => {
        console.error('Error al obtener los users:', error);
        return throwError(() => new Error('Error al obtener los  users'));
      })
    );
  }

  getUserById(id: number): Observable<IPublication[]> {
    return this.http.get<IPublication[]>(`${this.URL}/posts?userId=${id}`).pipe(
      catchError((error) => {
        return throwError(()=> new Error('Error al obtener las publicaciones'))
      })
    );
  }

}
