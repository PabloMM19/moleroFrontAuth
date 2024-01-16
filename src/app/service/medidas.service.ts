import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMedidasData } from '../model/medida.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidasService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getPacienteData() {
    return this.http.get<IMedidasData>(`${this.apiUrl}/medida?page=0&size=10`);
  }

  getPacienteDataPage(pageNumber: number, pageSize: number): Observable<IMedidasData> {
    const url = `${this.apiUrl}/medida?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IMedidasData>(url);
  }

}
