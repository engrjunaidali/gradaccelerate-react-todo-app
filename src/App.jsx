import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.error('Failed to parse todos from localStorage:', error);
        localStorage.removeItem('todos'); // Clear corrupted data
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    if (editingIndex >= 0) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = inputValue;
      setTodos(updatedTodos);
      setEditingIndex(-1);
    } else {
      setTodos([...todos, inputValue]);
    }

    setInputValue('');
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setInputValue(todos[index]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
      setEditingIndex(-1);
      setInputValue('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <main className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">📝 To-Do App</h1>
          <p className="text-gray-500 text-sm">Stay organized and productive</p>
          <p className="text-gray-500 text-sm">Grad Accelerate</p>
        </header>

        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={addTodo}
          isEditing={editingIndex >= 0}
        />

        <div className="mb-4 text-center">
          {todos.length > 0 && (
            <button
              onClick={clearAll}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm ml-auto"
            >
              Clear All
            </button>
          )}
        </div>

        <TodoList
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
};

export default App;
