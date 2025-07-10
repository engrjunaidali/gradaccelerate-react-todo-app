import React from 'react';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.length === 0 ? (
        <li className="text-center text-gray-500 py-4">No tasks yet. Add one above!</li>
      ) : (
        todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded hover:bg-gray-200 transition"
          >
            <span
              className="text-gray-700 flex-grow cursor-pointer"
              onClick={() => editTodo(index)}
              title="Click to edit"
            >
              {todo}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm"
                title="Delete"
              >
                Delete
              </button>
              <button
                onClick={() => editTodo(index)}
                className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded transition"
                title="Edit"
              >
                ✎ Edit
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
