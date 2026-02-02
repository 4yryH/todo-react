import { ChangeEvent, FormEvent } from 'react';
import type { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const handleToggle = (): void => {
    onToggle(todo.id);
  };

  const handleDelete = (): void => {
    onDelete(todo.id);
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newText = formData.get('text') as string;
    if (newText.trim()) {
      onEdit(todo.id, newText.trim());
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <form onSubmit={handleEdit} className="todo-form">
        <input
          type="text"
          name="text"
          defaultValue={todo.text}
          onChange={handleInputChange}
          className="todo-text"
          disabled={todo.completed}
        />
      </form>
      <button
        type="button"
        onClick={handleDelete}
        className="todo-delete"
        aria-label="Удалить задачу"
      >
        ×
      </button>
    </li>
  );
};
