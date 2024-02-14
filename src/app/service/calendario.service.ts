import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICalendarioData, ICalendario } from '../model/calendario.model';


@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private apiUrl = 'http://localhost:8083';

constructor(private http: HttpClient) { }

getCalendarioData() {
    return this.http.get<ICalendarioData>(`${this.apiUrl}/calendario`);
}

getDetailCalendario(id: number) {
    return this.http.get<ICalendario>(`${this.apiUrl}/calendario/${id}`);
}

}
