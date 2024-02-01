import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDiagnosticos, IDiagnosticosData } from '../model/diagnosticos.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiagnosticosService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getDiagnosticoData() {
    return this.http.get<IDiagnosticosData>(`${this.apiUrl}/diagnostico?size=15&page=0`);
  }

  getDetailDiagnostico(id: number): Observable<IDiagnosticos> {
    return this.http.get<IDiagnosticos>(`${this.apiUrl}/diagnostico/${id}`);
  }

  getDiagnosticoDataPage(pageNumber: number, pageSize: number): Observable<IDiagnosticosData> {
    const url = `${this.apiUrl}/diagnostico?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IDiagnosticosData>(url);
  }

  createDiagnostico(diagnostico: IDiagnosticos): Observable<IDiagnosticos> {
    return this.http.post<IDiagnosticos>(`${this.apiUrl}/diagnostico`, diagnostico);
  }

  updateDiagnostico(id:number, diagnostico: IDiagnosticos): Observable<IDiagnosticos> {
    const url = `${this.apiUrl}/diagnostico/${id}`;
    return this.http.put<IDiagnosticos>(url, diagnostico);
  }

  deleteDiagnostico(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/diagnostico/${id}`);
  }
}
