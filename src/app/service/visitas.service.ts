import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IVisitasData } from '../model/visitas.model';
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

  getVisitasDataPage(pageNumber: number, pageSize: number): Observable<IVisitasData> {
    const url = `${this.apiUrl}/visita?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IVisitasData>(url);
  }
}
