import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../../shared/todo';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  providers: [TodoService]
})
export class ExampleComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  addTodo(todo) {
    this.todoService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
          this.newTodo = new Todo();
        }
      );
  }

  toggleTodoComplete(todo) {
    this.todoService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }

  removeTodo(todo) {
    this.todoService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }
}
