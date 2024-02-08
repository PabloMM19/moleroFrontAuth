import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SessionService } from "../service/session.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.sessionService.isSessionActive()) {
            const token = this.sessionService.getToken();
            if (token) {
                const cloned = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + token)
                });
                return next.handle(cloned);
            }
        }

        return next.handle(req).pipe(
            catchError(error => {
                if (req.url.endsWith('/login')) {
                    // Si es una solicitud de inicio de sesión y hay un error de análisis JSON,
                    // simplemente pasa la respuesta como está
                    return throwError(error);
                }
                // Para otras solicitudes, pasa el error normalmente
                return throwError(error);
            })
        );
    }
}
