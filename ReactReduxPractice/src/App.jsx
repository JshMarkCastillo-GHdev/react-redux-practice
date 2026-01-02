import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./lib/todoSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} &nbsp;
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
