import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('assets/data.json').pipe(
      map(response => response.data) // Extrae solo el array `data`
    );
  }
}
