import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

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

  const onHandleEditClick = (todo) => {
    setIsEditing(todo);
  };
  const onHandleSaveEdit = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id == isEditing.id ? { ...todo, text: editValue } : todo
      )
    );
    setIsEditing(null);
  };
  const onHandleCancelSave = () => {
    setIsEditing(null);
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
              {isEditing && isEditing.id == todo.id ? (
                <>
                  <form action="" onSubmit={onHandleSaveEdit}>
                    <input
                      type="text"
                      defaultValue={isEditing.text}
                      onInput={(e) => setEditValue(e.target.value)}
                    />
                    <button>Save</button>
                    <button onClick={onHandleCancelSave}>Cancel</button>
                  </form>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration:
                        todo.done == true ? "line-through" : "none",
                    }}
                    onClick={() => onHandleEditClick(todo)}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => onHandleRemove(todo.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
