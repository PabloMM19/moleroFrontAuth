import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPruebas, IPruebasData } from '../model/pruebas.model';
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

  getDetailPrueba(id: number): Observable<IPruebas> {
    return this.http.get<IPruebas>(`${this.apiUrl}/prueba/${id}`);
  }

  getPruebasDataPage(pageNumber: number, pageSize: number): Observable<IPruebasData> {
    const url = `${this.apiUrl}/prueba?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IPruebasData>(url);
  }

  createPrueba(prueba: IPruebas): Observable<IPruebas> {
    return this.http.post<IPruebas>(`${this.apiUrl}/prueba`, prueba);
  }

  updatePrueba(id: number, prueba: IPruebas): Observable<IPruebas> {
    const url = `${this.apiUrl}/prueba/${id}`;
    return this.http.put<IPruebas>(url, prueba);
  }

  deletePrueba(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/prueba/${id}`);
  }
}
