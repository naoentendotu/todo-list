import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

import "./App.css";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Exemplo 1",
      category: "Trabalho",
      isConcluded: false,
    },
    {
      id: 2,
      text: "Exemplo 2",
      category: "Pessoal",
      isConcluded: false,
    },
    {
      id: 3,
      text: "Exemplo 3",
      category: "Estudos",
      isConcluded: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isConcluded: false,
      },
    ];

    setTodos(newTodos);
  };

  const concludedTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isConcluded = !todo.isConcluded) : todo
    );
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id != id ? todo : null
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>To-Do</h1>

      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Concluede"
              ? todo.isConcluded
              : !todo.isConcluded
          )

          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              concludedTodo={concludedTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
