import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMedicacionData } from '../model/medicacion.model';
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

  getMedicacionDataPage(pageNumber: number, pageSize: number): Observable<IMedicacionData> {
    const url = `${this.apiUrl}/medicacion?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IMedicacionData>(url);
  }
}
