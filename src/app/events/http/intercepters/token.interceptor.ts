import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.API_URL.split('/');
    const acessToken: string = environment.ACESS_TOKEN;

    if (requestUrl[2] === apiUrl[2]) {
      const newRequest = request.clone({ setHeaders: { 'Access-Token': acessToken } });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }
}
