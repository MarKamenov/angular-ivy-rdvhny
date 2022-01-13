import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteTodo, LoadTodos, ToggleTodo } from '../../state/todos.actions';
import { TodosState } from '../../state/todos.state';
import { ITodoItem } from '../../types';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @Select(TodosState.todos)
  public readonly todos$: Observable<ITodoItem[]>;

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new LoadTodos());
  }
  public toggleItem(todo: ITodoItem) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  deleteItem(todo: ITodoItem) {
    this.store.dispatch(new DeleteTodo(todo));
  }
}
