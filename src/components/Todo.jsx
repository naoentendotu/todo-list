import React from "react";

const Todo = ({ todo, removeTodo, concludedTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isConcluded ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="concluded" onClick={() => concludedTodo(todo.id)}>
          Concluída
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default Todo;
