import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPacientes, IPacientesData } from '../model/pacientes.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  searchPacientes(query: string): Observable<IPacientes[]> {
    return this.http.get<IPacientes[]>(`${this.apiUrl}/paciente/buscar?query=${query}`).pipe(
      catchError(error => {
        console.error('Error al buscar pacientes', error);
        return [];
      })
    );
  }

  getProgenitoresByPacienteId(pacienteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/paciente/${pacienteId}/progenitores`);
  }
  

  getPacienteData() {
    return this.http.get<IPacientesData>(`${this.apiUrl}/paciente?page=0&size=10`);
  }

  getOnePaciente(id: number) {
    return this.http.get<IPacientes>(`${this.apiUrl}/paciente/${id}`);
  }

  getDetailPaciente(id: number): Observable<IPacientes> {
    return this.http.get<IPacientes>(`${this.apiUrl}/paciente/${id}`);
  }

  getPacienteDataPage(pageNumber: number, pageSize: number): Observable<IPacientesData> {
    const url = `${this.apiUrl}/paciente?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IPacientesData>(url);
  }

  createPaciente(paciente: IPacientes): Observable<IPacientes> {
    return this.http.post<IPacientes>(`${this.apiUrl}/paciente`, paciente);
  }

  updatePaciente(id:number, paciente: IPacientes): Observable<IPacientes> {
    const url = `${this.apiUrl}/paciente/${id}`;
    return this.http.put<IPacientes>(url, paciente);
  }

  deletePaciente(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/paciente/${id}`);
  }

}
