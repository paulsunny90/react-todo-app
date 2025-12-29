
import { useState } from "react";
import { useTodos } from "../context/todocontext.jsx";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center border p-2 mb-2 rounded">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1 flex-1 mr-2"
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
