import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

import "./todo.scss";

export default class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputTodo: "",
      todos: []
    };
  }

  removeTodo = id => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  };

  render() {
    const { todos, textInputTodo } = this.state;
    return (
      <div className="todos-container">
        <div className="todos-header">
          <TextField
            fullWidth
            onChange={e => this.setState({ textInputTodo: e.target.value })}
            value={textInputTodo}
          />
          <Button
            onClick={() =>
              this.setState({
                todos: [
                  ...todos,
                  {
                    id: (Math.random(1000) * 1000000).toFixed(0),
                    text: textInputTodo
                  }
                ],
                textInputTodo: ""
              })
            }
          >
            Adicionar
          </Button>
        </div>
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.text}
              removeTodo={this.removeTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

function TodoItem({ id, todo, removeTodo }) {
  const deleteIcon =
    "https://icon-icons.com/icons2/1150/PNG/32/1486504830-delete-dustbin-empty-recycle-recycling-remove-trash_81361.png";
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <div onClick={() => removeTodo(id)}>
        <img src={deleteIcon} alt="Remove todo" />
      </div>
    </div>
  );
}
