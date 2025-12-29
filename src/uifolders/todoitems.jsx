import { useState } from "react";
import { useTodos } from "../context/todocontext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=""
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className=""
          >
            Save
          </button>
        ):(
            <button onClick={setIsEditing(true)}
            className="">
                Edite
            </button>
            
        )}
            <button onClick={deleteTodo(id)}
            className="">
                delete
            </button>
        
      </div>
    </div>
  );
};

export default TodoItem;

