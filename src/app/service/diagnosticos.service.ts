import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDiagnosticosData } from '../model/diagnosticos.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiagnosticosService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getPacienteData() {
    return this.http.get<IDiagnosticosData>(`${this.apiUrl}/diagnostico?page=0&size=10`);
  }

  getPacienteDataPage(pageNumber: number, pageSize: number): Observable<IDiagnosticosData> {
    const url = `${this.apiUrl}/diagnostico?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IDiagnosticosData>(url);
  }
}
