import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className='todo-item'>
      <h3>{todo.title}</h3>
      <p>{todo.details}</p>
      <p>
        <strong>Due:</strong> {todo.dueDate}
      </p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
