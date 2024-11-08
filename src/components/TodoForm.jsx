import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSubmit, existingTodo, onCancel }) => {
  const [title, setTitle] = useState(existingTodo ? existingTodo.title : '');
  const [details, setDetails] = useState(
    existingTodo ? existingTodo.details : ''
  );
  const [dueDate, setDueDate] = useState(
    existingTodo ? existingTodo.dueDate : ''
  );
  
  const [errMessage, seterrMessage] = useState('');

  useEffect(() => {
    if (existingTodo) {
      setTitle(existingTodo.title);
      setDetails(existingTodo.details);
      setDueDate(existingTodo.dueDate);
    }
  }, [existingTodo]);

  const handleSubmit = () => {

    if(title.length < 1 ||  details.length < 1 ) {
        seterrMessage('Title & Detail of Todo list required.') 
        return true;
    }
    
    const newTodo = { title, details, dueDate };
    if (existingTodo) {
      onSubmit({ ...newTodo, id: existingTodo.id });
    } else {
      onSubmit(newTodo);
    }
    setTitle('');
    setDetails('');
    setDueDate('');
    seterrMessage('')
   
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
        <p className="error-region">{errMessage}</p>
      </>
  );
};

export default TodoForm;
