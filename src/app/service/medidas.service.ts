import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMedidas, IMedidasData } from '../model/medida.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidasService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getMedidaData() {
    return this.http.get<IMedidasData>(`${this.apiUrl}/medida?page=0&size=10`);
  }

  getDetailMedida(id: number) {
    return this.http.get<IMedidas>(`${this.apiUrl}/medida/${id}`);
  }

  getMedidaDataPage(pageNumber: number, pageSize: number): Observable<IMedidasData> {
    const url = `${this.apiUrl}/medida?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IMedidasData>(url);
  }

  createMedida(medida: IMedidas): Observable<IMedidas>{
    return this.http.post<IMedidas>(`${this.apiUrl}/medida`, medida);
  }

  updateMedida(id: number, medida:IMedidas): Observable<IMedidas>{
    const url = `${this.apiUrl}/medida/${id}`;
    return this.http.put<IMedidas>(url, medida);
  }

  deleteMedida(id: number): Observable<Number>{
    return this.http.delete<Number>(`${this.apiUrl}/medida/${id}`);
  }

}
