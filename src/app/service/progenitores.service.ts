import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProgenitores, IProgenitoresData } from '../model/progenitores.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgenitoresService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getProgenitorData() {
    return this.http.get<IProgenitoresData>(`${this.apiUrl}/progenitor?page=0&size=10`);
  }

  getOneProgenitor(id: number) {
    return this.http.get<IProgenitores>(`${this.apiUrl}/progenitor/${id}`);
  }

  getDetailProgenitor(id: number): Observable<IProgenitores> {
    return this.http.get<IProgenitores>(`${this.apiUrl}/progenitor/${id}`);
  }

  getProgenitorDataPage(pageNumber: number, pageSize: number): Observable<IProgenitoresData> {
    const url = `${this.apiUrl}/progenitor?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IProgenitoresData>(url);
  }

  createProgenitor(progenitor: IProgenitores): Observable<IProgenitores> {
    return this.http.post<IProgenitores>(`${this.apiUrl}/progenitor`, progenitor);
  }

  updateProgenitor(id: number, progenitor: IProgenitores): Observable<IProgenitores> {
    const url = `${this.apiUrl}/progenitor/${id}`;
    return this.http.put<IProgenitores>(url, progenitor);
  }

  deleteProgenitor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/progenitor/${id}`);
  }
}
