export interface TodoProps {
  text: string;
  completed: boolean;
  id: string;
}

export interface Footer {
  hideAll: Boolean;
  showCompleted: Boolean;
}

export interface RootState {
  todos: TodoProps[];
  footer: Footer;
}
