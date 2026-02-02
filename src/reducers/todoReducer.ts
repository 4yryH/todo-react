import type { TodoState, TodoAction, Todo } from '../types/todo';

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case 'EDIT_TODO': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};
