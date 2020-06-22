import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuth: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token = this.basicAuth.getAuthenticatedToken()
    let username = this.basicAuth.getAuthenticatedUser()

    if (token && username) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }

    return next.handle(request)
  }
}
