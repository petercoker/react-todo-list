import React from "react";

export default function Task({ task }) {
  return (
    <div>
      <label>
      {task.name}
        <input type="checkbox" checked={task.isCompleted} />
      </label>
    </div>
  );
}
