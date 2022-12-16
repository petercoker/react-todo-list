import React, { useState, useRef, useEffect } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";
const LOCAL_STORAGE_KEY = "taskApp.tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();
  const key = Math.floor(Math.random() * 1000 + 1);

  useEffect(() => {}, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    const name = taskNameRef.current.value;
    if (name === "") return;
    // setTasks([...tasks, { id: key, name: name, isCompleted: false}])
    setTasks([...tasks, { id: uuidv4(), name: name, isCompleted: false }]);
    taskNameRef.current.value = null; // clear input after click
  }
  // Its empty as we don't have any tasks
  return (
    <>
      {/* Called a fragrament, allows up to return more than one element by rapping the element within this syntax tree */}
      <input ref={taskNameRef} type="text" />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
      <button type="button">Clear Task</button>
      <div>Number of Tasks: 0</div>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
