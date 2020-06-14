import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(null, null, null, null)

    if (this.id !== 0) {
      this.service.retrieveTodo("fonseca", this.id).subscribe(
        response => this.todo = response,
        error => console.log(error)
      )
    }
  }

  saveTodo() {
    if (!this.todo.id) {
      this.todo.id = null
    }

    this.service.saveTodo("fonseca", this.todo).subscribe(
      response => {
        this.router.navigate(['todos'])
      },
      error => console.log(error)
    )
  }

}
