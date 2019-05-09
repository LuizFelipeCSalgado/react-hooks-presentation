import React from "react";

import "./todo.scss";

export default function TodoItem({ id, todo, removeTodo }) {
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
