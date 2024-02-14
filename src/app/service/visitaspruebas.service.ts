import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVisitasPrueba, IVisitasPruebasData } from '../model/visitaspruebas.model';

@Injectable()
export class VisitaspruebasService {

    private apiUrl = 'http://localhost:8083';

constructor(private http: HttpClient) { }

getVisitasPruebasData() {
    return this.http.get<IVisitasPruebasData>(`${this.apiUrl}/visitaprueba?size=15&page=0`);
}

getbyvisitaid(id: number) {
    return this.http.get<IVisitasPrueba>(`${this.apiUrl}/visitaprueba/visita/${id}`);
}

getDetailVisitasPruebas(id: number): Observable<IVisitasPrueba> {
    return this.http.get<IVisitasPrueba>(`${this.apiUrl}/visitaprueba/${id}`);
}

getVisitasPruebasDataPage(pageNumber: number, pageSize: number): Observable<IVisitasPruebasData> {
    const url = `${this.apiUrl}/visitaprueba?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IVisitasPruebasData>(url);
}

createVisitasPruebas(visitaspruebas: IVisitasPrueba): Observable<IVisitasPrueba> {
    return this.http.post<IVisitasPrueba>(`${this.apiUrl}/visitaprueba`, visitaspruebas);
}

updateVisitasPruebas(id:number, visitaspruebas: IVisitasPrueba): Observable<IVisitasPrueba> {
    const url = `${this.apiUrl}/visitaprueba/${id}`;
    return this.http.put<IVisitasPrueba>(url, visitaspruebas);
}

deleteVisitasPruebas(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/visitaprueba/${id}`);
}

}
