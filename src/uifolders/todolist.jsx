import { useTodos } from "../context/todocontext";
import TodoItem from "./todoitems";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div>
      {todos.length === 0 && (
        <p>No todos yet</p>
      )}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;