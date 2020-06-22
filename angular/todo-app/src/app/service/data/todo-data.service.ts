import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }

  saveTodo(username: any, todo: Todo) {
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`, todo)
  }

  deleteTodo(username: any, id: number) {
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: any, id: number) {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }
}
