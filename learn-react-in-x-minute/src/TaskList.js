import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return tasks.map((task) => {
    return <Task key={task.id} task={task} />;
    // key is used to tell React to only re-rend a specific task instead of the all task. This there for effenice pr
  });
}
