import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo:string=""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'You Can Add To-do with Add To-do Button',
        completed: false,
      },
      {
        content: 'You Can Remove To-do with Remove Button ',
        completed: false,
      }
    ];
  }

  toggleDone(id:number) 
  {
    this.todos.map((v,i) => 
    {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }
  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => {
      return i !== id;
    });
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
      
    });
    this.inputTodo = ""
  }
}
