import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string

  constructor(
    private service: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('fonseca').subscribe(
      response => {
        console.log(response)
        this.todos = response
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteTodo(id: number) {
    this.service.deleteTodo("fonseca", id).subscribe(
      response => {
        console.log(response)
        this.message = "Todo deleted with sucess"
        this.refreshTodos();
      },
      error => {
        console.log(error)
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(["todos", id])
  }


  addTodo() {
    this.router.navigate(["todos", 0])
  }
}



export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}