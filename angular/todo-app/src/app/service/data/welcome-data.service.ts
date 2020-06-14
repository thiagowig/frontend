import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/path-variable/${name}`)
  }
  
}
