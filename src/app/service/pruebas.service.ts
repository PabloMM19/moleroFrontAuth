import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPruebasData } from '../model/pruebas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getPruebasData() {
    return this.http.get<IPruebasData>(`${this.apiUrl}/prueba?page=0&size=10`);
  }

  getPruebasDataPage(pageNumber: number, pageSize: number): Observable<IPruebasData> {
    const url = `${this.apiUrl}/prueba?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IPruebasData>(url);
  }
}
