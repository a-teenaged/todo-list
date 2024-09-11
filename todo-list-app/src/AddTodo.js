import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title, priority);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите задачу"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      <button type="submit">Добавить</button>
    </form>
  ); 
}

export default AddTodo;