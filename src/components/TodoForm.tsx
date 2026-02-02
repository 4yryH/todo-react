import { FormEvent, ChangeEvent, useState } from 'react';

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      onAdd(trimmedValue);
      setInputValue('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Добавить новую задачу..."
        className="todo-input"
      />
      <button type="submit" className="todo-submit">
        Добавить
      </button>
    </form>
  );
};
