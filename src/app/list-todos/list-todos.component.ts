import { Component } from '@angular/core';

export class Todo{
  constructor( 
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // }

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Learn to swim', false, new Date()),
    new Todo(3, 'Learn frontend', false, new Date())
    // {
    //   id: 1,
    //   description: 'Learn to dance'
    // },
    // {
    //   id: 2,
    //   description: 'Learn to swim'
    // },
    // {
    //   id: 3,
    //   description: 'Learn frontend'
    // }
  ]




}
