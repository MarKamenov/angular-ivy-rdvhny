import { ITodoItem } from '../types';
export class AddTodo {
  static readonly type = '[TODO] Add Todo';

  constructor(public payload: string) {}
}

export class LoadTodos {
  static readonly type = '[TODO] Load Todos';
}

export class ToggleTodo {
  static readonly type = '[TODO] Toggle Todo';

  constructor(public payload: ITodoItem) {}
}

export class DeleteTodo {
  static readonly type = '[TODO] Delete Todo';

  constructor(public payload: ITodoItem) {}
}
