import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IVisitas, IVisitasData } from '../model/visitas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class VisitasService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getVisitasData() {
    return this.http.get<IVisitasData>(`${this.apiUrl}/visita?page=0&size=10`);
  }

  getDetailVisita(id: number) {
    return this.http.get<IVisitas>(`${this.apiUrl}/visita/${id}`);
  }

  getVisitasDataPage(pageNumber: number, pageSize: number): Observable<IVisitasData> {
    const url = `${this.apiUrl}/visita?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IVisitasData>(url);
  }

  createVisita(visita: IVisitas) {
    return this.http.post<IVisitas>(`${this.apiUrl}/visita`, visita);
  }

  updateVisita(id: number, visita: IVisitas) {
    const url = `${this.apiUrl}/visita/${id}`;
    return this.http.put<IVisitas>(url, visita);
  }

  deleteVisita(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/visita/${id}`);
  }
}
