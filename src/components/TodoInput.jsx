import React from 'react';

const TodoInput = ({ inputValue, setInputValue, onSubmit, isEditing }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex mb-4"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
      >
        {isEditing ? 'Update' : 'Add Task'}
      </button>
    </form>
  );
};

export default TodoInput;
