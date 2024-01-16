import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeguroMedicoData } from '../model/seguromedico.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguroMedicoService {

  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getSeguroMedicoData() {
    return this.http.get<ISeguroMedicoData>(`${this.apiUrl}/seguromedico?page=0&size=10`);
  }

  getSeguroMedicoDataPage(pageNumber: number, pageSize: number): Observable<ISeguroMedicoData> {
    const url = `${this.apiUrl}/seguromedico?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<ISeguroMedicoData>(url);
  }

}
