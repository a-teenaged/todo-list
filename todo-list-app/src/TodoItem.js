import React from 'react';

function TodoItem({ todo, toggleComplete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.title} (Приоритет: {todo.priority})</span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Отменить' : 'Завершить'}
      </button>
    </li>
  )
}

