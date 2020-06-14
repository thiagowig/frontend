import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'thiagowig' && password === 'admin') {
      sessionStorage.setItem('authenticatedUser', username)
      return true

    } else {
      return false
    }
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('authenticatedUser')

    return username !== null
  }
}
