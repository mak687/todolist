import React, { useState } from "react";
import './App.css';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
    setFormVisible(false);
  };

  const editTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openFormForEdit = (todo) => {
    setEditingTodo(todo);
    setFormVisible(true);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <button onClick={() => setFormVisible(!isFormVisible)}>Add Todo</button>

      {isFormVisible && (
        <TodoForm
          onSubmit={editingTodo ? editTodo : addTodo}
          existingTodo={editingTodo}
          onCancel={() => {
            setFormVisible(false);
            setEditingTodo(null);
          }}
        />
      )}

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={() => openFormForEdit(todo)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;