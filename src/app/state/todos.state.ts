import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ITodoItem } from '../types';
import { LoadTodos, AddTodo, DeleteTodo, ToggleTodo } from './todos.actions';
import { TodosService } from '../core/services/todos.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

interface ITodoStateModel {
  todos: ITodoItem[];
}

@State<ITodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodosState {
  @Selector()
  static todos(state: ITodoStateModel): ITodoItem[] {
    return state.todos;
  }

  @Selector()
  static numUncheckedTodos(state: ITodoStateModel): number {
    return state.todos.filter((todo) => !todo.checked).length;
  }

  public constructor(private todosService: TodosService) {}

  @Action(LoadTodos)
  public loadTodos({
    setState,
  }: StateContext<ITodoStateModel>): Observable<ITodoItem[]> {
    return this.todosService.getTtodos$.pipe(
      tap((result: ITodoItem[]) => {
        setState({
          todos: result,
        });
      })
    );
  }

  @Action(AddTodo)
  createTodo(
    { getState, patchState }: StateContext<ITodoStateModel>,
    action: AddTodo
  ) {
    const todo = { description: action.payload, checked: false };
    patchState({
      todos: [todo, ...getState().todos],
    });
  }

  @Action(ToggleTodo)
  toggleTodo(
    { getState, patchState }: StateContext<ITodoStateModel>,
    action: ToggleTodo
  ) {
    const todo = action.payload;
    todo.checked = !todo.checked;
    const state = getState();
    patchState({
      todos: [...state.todos],
    });
  }

  @Action(DeleteTodo)
  deleteTodo(
    { getState, patchState }: StateContext<ITodoStateModel>,
    action: DeleteTodo
  ) {
    const { todos } = getState();
    patchState({
      todos: todos.filter((todo) => todo !== action.payload),
    });
  }
}
