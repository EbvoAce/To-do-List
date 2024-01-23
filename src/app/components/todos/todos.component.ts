import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    todos: Todo[] = [];

    inputTodo: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'second todo',
        completed:false
      }
    ]
  }

  toggledone(id: number) {
    this.todos.map((v,i)=> {
      if (i == id) v.completed = !v.completed;
      return v;

    })

  }

  toggledelete(id: number){
    this.todos = this.todos.filter((v,i) => i !==id);
  }

  AddTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false

    })
    this.inputTodo = "";
  }



}
