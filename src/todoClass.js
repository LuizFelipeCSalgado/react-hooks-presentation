import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

import TodoItem from "./todoItem";

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
            onClick={() => {
              if (textInputTodo)
                this.setState({
                  todos: [
                    ...todos,
                    {
                      id: (Math.random(1000) * 1000000).toFixed(0),
                      text: textInputTodo
                    }
                  ],
                  textInputTodo: ""
                });
            }}
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
