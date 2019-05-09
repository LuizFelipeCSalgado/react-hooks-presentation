import React from "react";
import { Button } from "@material-ui/core";

import "./counter.scss";

export default function TodoFunction() {
  const count = 0; // TODO: setar no estado com valor inicial 0;
  return (
    <div className="counter-container">
      <Button onClick={() => {}}>-10</Button>
      <Button onClick={() => {}}>-5</Button>
      <Button onClick={() => {}}>-1</Button>
      <p onClick={() => {}}>{count}</p>
      <Button onClick={() => {}}>+1</Button>
      <Button onClick={() => {}}>+5</Button>
      <Button onClick={() => {}}>+10</Button>
    </div>
  );
}
