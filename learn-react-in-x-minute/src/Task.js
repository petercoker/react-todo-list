import React from "react";

export default function Task({ task , toggleTask}) {
  function handleTaskClick() {
    toggleTask(task.id);
    console.log("handle")
  }
  return (
    <div>
      <label>
      {task.name}
        <input type="checkbox" checked={task.isCompleted} onChange={handleTaskClick} />
      </label>
    </div>
  );
}
