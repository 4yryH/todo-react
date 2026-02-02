import { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { todoReducer } from './reducers/todoReducer';
import type { TodoState } from './types/todo';
import './App.css';

const initialState: TodoState = {
  todos: [],
};

export const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = (text: string): void => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const handleToggle = (id: string): void => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDelete = (id: string): void => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleEdit = (id: string, text: string): void => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text } });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Список дел</h1>
      </header>
      <main className="app-main">
        <TodoForm onAdd={handleAdd} />
        <TodoList
          todos={state.todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
};
