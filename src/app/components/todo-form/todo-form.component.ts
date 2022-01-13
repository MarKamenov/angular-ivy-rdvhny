import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddTodo } from '../../state/todos.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  public readonly todoForm = this.fb.group({
    todoDescription: this.fb.control('', Validators.required),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  public createTodo() {
    const { todoDescription } = this.todoForm.value;
    if (todoDescription) {
      this.store.dispatch(new AddTodo(todoDescription));
    }
  }
}
