import React, { Component } from "react";
import { Button } from "@material-ui/core";

import "./counter.scss";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <Button onClick={() => this.setState({ count: count - 10 })}>
          -10
        </Button>
        <Button onClick={() => this.setState({ count: count - 5 })}>-5</Button>
        <Button onClick={() => this.setState({ count: count - 1 })}>-1</Button>
        <p onClick={() => this.setState({ count: 0 })}>{count}</p>
        <Button onClick={() => this.setState({ count: count + 1 })}>+1</Button>
        <Button onClick={() => this.setState({ count: count + 5 })}>+5</Button>
        <Button onClick={() => this.setState({ count: count + 10 })}>
          +10
        </Button>
      </div>
    );
  }
}
