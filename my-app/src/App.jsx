import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
    setInputValue("");
  };

  const onHandleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <>
      {JSON.stringify(todos)}
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
              <span
                style={{
                  textDecoration: todo.done == true ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => onHandleRemove(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
