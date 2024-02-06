import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IVisitasMedicacion, IVisitasMedicacionData } from '../model/visitasmedicacion.model';

@Injectable({
    providedIn: 'root'
  })
export class VisitasmedicacionService {

    private apiUrl = 'http://localhost:8083';

constructor(private http: HttpClient) { }

getVisitasMedicacionData() {
    return this.http.get<IVisitasMedicacionData>(`${this.apiUrl}/visitamedicacion?size=15&page=0`);
}

getDetailVisitasMedicacion(id: number): Observable<IVisitasMedicacion> {
    return this.http.get<IVisitasMedicacion>(`${this.apiUrl}/visitamedicacion/${id}`);
}

getVisitasMedicacionDataPage(pageNumber: number, pageSize: number): Observable<IVisitasMedicacionData> {
    const url = `${this.apiUrl}/visitamedicacion?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IVisitasMedicacionData>(url);
}

createVisitasMedicacion(visitasmedicacion: IVisitasMedicacion): Observable<IVisitasMedicacion> {
    return this.http.post<IVisitasMedicacion>(`${this.apiUrl}/visitamedicacion`, visitasmedicacion);
}

updateVisitasMedicacion(id:number, visitasmedicacion: IVisitasMedicacion): Observable<IVisitasMedicacion> {
    const url = `${this.apiUrl}/visitamedicacion/${id}`;
    return this.http.put<IVisitasMedicacion>(url, visitasmedicacion);
}

deleteVisitasMedicacion(id: number): Observable<Number> {
    return this.http.delete<Number>(`${this.apiUrl}/visitamedicacion/${id}`);
}

}
