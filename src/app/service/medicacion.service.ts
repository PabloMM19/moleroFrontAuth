import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMedicacion, IMedicacionData } from '../model/medicacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicacionService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getMedicacionData() {
    return this.http.get<IMedicacionData>(`${this.apiUrl}/medicacion?page=0&size=10`);
  }

  getDetailMedicacion(id: number): Observable<IMedicacion> {
    return this.http.get<IMedicacion>(`${this.apiUrl}/medicacion/${id}`);
  }

  getMedicacionDataPage(pageNumber: number, pageSize: number): Observable<IMedicacionData> {
    const url = `${this.apiUrl}/medicacion?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IMedicacionData>(url);
  }

  createMedicacion(medicacion: IMedicacion): Observable<IMedicacion> {
    return this.http.post<IMedicacion>(`${this.apiUrl}/medicacion`, medicacion);
  }

  updateMedicacion(medicacion: IMedicacion): Observable<IMedicacion> {
    const url = `${this.apiUrl}/medicacion/${medicacion.id}`;
    return this.http.put<IMedicacion>(url, medicacion);
  }

  deleteMedicacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/medicacion/${id}`);
  }

}
