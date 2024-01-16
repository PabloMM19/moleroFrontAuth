import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProgenitoresData } from '../model/progenitores.model';
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

  getProgenitorDataPage(pageNumber: number, pageSize: number): Observable<IProgenitoresData> {
    const url = `${this.apiUrl}/progenitor?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IProgenitoresData>(url);
  }
}
