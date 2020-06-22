import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>("${API_URL}")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/path-variable/${name}`)
  }
  
}
