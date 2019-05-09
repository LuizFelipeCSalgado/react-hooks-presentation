import React from "react";
import { TextField, Button } from "@material-ui/core";

import TodoItem from "./todoItem";

export default function TodoFunction() {
  const todos = []; // TODO: setar valor inicial [] no estado
  const textInputTodo = ""; // TODO: setar valor inicial '' no estado.
  return (
    <div className="todos-container">
      <div className="todos-header">
        <TextField fullWidth onChange={() => {}} value={textInputTodo} />
        <Button onClick={() => {}}>Adicionar</Button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            removeTodo={() => {}}
          />
        ))}
      </ul>
    </div>
  );
}
