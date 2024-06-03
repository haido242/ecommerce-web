import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token) {
            // check if token is expired
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                // token expired
                localStorage.removeItem('token');
                // redirect to login page
                window.location.href = '/login';
                return next.handle(req);
            }
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer '+  token)
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}