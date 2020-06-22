import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username, password) {
    var body = {
      username: username,
      password: password
    }

    return this.httpClient.post<any>(`${API_URL}/authenticate`, body)
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data
          }
        )
      )
  }
  
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class Authentication {
  constructor () {}
}