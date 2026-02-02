import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export const TodoList = ({ todos, onToggle, onDelete, onEdit }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <p>Список дел пуст. Добавьте новую задачу!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};
