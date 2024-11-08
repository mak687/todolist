import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSubmit, existingTodo, onCancel }) => {
  const [title, setTitle] = useState(existingTodo ? existingTodo.title : '');
  const [details, setDetails] = useState(
    existingTodo ? existingTodo.details : ''
  );
  const [dueDate, setDueDate] = useState(
    existingTodo ? existingTodo.dueDate : ''
  );

  useEffect(() => {
    if (existingTodo) {
      setTitle(existingTodo.title);
      setDetails(existingTodo.details);
      setDueDate(existingTodo.dueDate);
    }
  }, [existingTodo]);

  const handleSubmit = () => {
    const newTodo = { title, details, dueDate };

    console.log(existingTodo)
    if (existingTodo) {
      onSubmit({ ...newTodo, id: existingTodo.id });
    } else {
      onSubmit(newTodo);
    }
    setTitle('');
    setDetails('');
    setDueDate('');
  };

  return (
     <>
        <h2>{existingTodo ? 'Edit Todo' : 'Add Todo'}</h2>

        <label>Title:</label>
        <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
        />

        <label>Details:</label>
        <textarea
            value={details}
            onChange={e => setDetails(e.target.value)}
            required
        />

        <label>Due Date:</label>
        <input
            type='date'
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            required
        />

        <button type='button' onClick={handleSubmit}>
            {existingTodo ? 'Save Changes' : 'Add Todo'}
        </button>
        <button type='button' onClick={onCancel}>
            Cancel
        </button>
      </>
  );
};

export default TodoForm;
