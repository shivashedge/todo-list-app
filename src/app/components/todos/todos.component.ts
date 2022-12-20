import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [];
    let localTodo = localStorage.getItem('todos');
    if (localTodo) {
      this.todos = JSON.parse(localTodo);
    }
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => {
      return i !== id;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
