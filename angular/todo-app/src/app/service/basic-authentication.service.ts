import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username, password) {
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    })

    return this.httpClient.get<Authentication>(`${API_URL}/basicauth`, {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeader)
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