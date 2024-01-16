import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPacientesData } from '../model/pacientes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getPacienteData() {
    return this.http.get<IPacientesData>(`${this.apiUrl}/paciente?page=0&size=10`);
  }

  getPacienteDataPage(pageNumber: number, pageSize: number): Observable<IPacientesData> {
    const url = `${this.apiUrl}/paciente?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IPacientesData>(url);
  }

}
