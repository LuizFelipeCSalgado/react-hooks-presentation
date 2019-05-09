import React from "react";

import TodoClass from "./todoClass";
import CounterClass from "./counterClass";
import TodoFunction from "./todoFunction";
import CounterFunction from "./counterFunction";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="class-and-counter">
        <TodoClass />
        <CounterClass />
      </div>
      <div className="class-and-counter">
        <TodoFunction />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
