import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  saveTodo(username: any, todo: Todo) {
    return this.httpClient.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo)
  }

  deleteTodo(username: any, id: number) {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: any, id: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}