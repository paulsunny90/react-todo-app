import { useState } from "react";
import { useTodos } from "../context/todocontext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
        <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
    
      />
      <button>
        Add
      </button>
    </form>

  );
};

export default TodoForm;
