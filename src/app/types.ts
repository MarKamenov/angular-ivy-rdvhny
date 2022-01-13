export interface IMenuItem {
  title: string;
  icon?: string;
  path?: string;
  active?: boolean;
}

export interface ITodoItem {
  description: string;
  checked: boolean;
}
