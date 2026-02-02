// Типы для Todo приложения
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'EDIT_TODO'; payload: { id: string; text: string } };
