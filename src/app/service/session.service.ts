import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { IToken, SessionEvent } from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = 'http://localhost:8083/session';

  subjectSession = new Subject<SessionEvent>();

  constructor(private http: HttpClient) { }

  private parseJwt(token: string): IToken {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  login(sUsername: string, sPassword: string): Observable<string> {
    return this.http.post<string>(this.apiUrl + '/login', { "username": sUsername, "password": sPassword })
      .pipe(
        tap((response: string) => {
          console.log("respuesta: "+response)
          this.setToken(response); // Almacena el token en el servicio de sesión
        })
      );
  }

  setToken(sToken: string): void {
    localStorage.setItem('token', sToken);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isSessionActive(): Boolean {
    let strToken: string | null = localStorage.getItem('token');
    if (strToken) {
      let oDecodedToken: IToken = this.parseJwt(strToken);
      if (Date.now() >= oDecodedToken.exp * 1000) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getUsername(): string {
    if (this.isSessionActive()) {
      let token: string | null = localStorage.getItem('token');
      if (!token) {
        return "";
      } else {
        return this.parseJwt(token).name;
      }
    } else {
      return "";
    }
  }

  on(): Observable<SessionEvent> {
    return this.subjectSession.asObservable();
  }

  emit(event: SessionEvent) {
    this.subjectSession.next(event);
  }

}
