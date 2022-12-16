import React, { useState, useRef, useEffect } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "taskApp.tasks";

function App() {
  // const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []); // Store tasks after browser refresh
  const [tasks, setTasks] = useState([]); // Store tasks after browser refresh
  const taskNameRef = useRef();
  // const key = Math.floor(Math.random() * 1000 + 1);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTasks)
    if (storedTasks.length > 0) setTasks(storedTasks);
  }, []);  // Store tasks after browser refresh

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]); // Get tasks

  function toggleTask(id) {
    const newTasks = [...tasks];
    // Never directly modify a state variable,
    // You should create a copy before modifying it and then use that
    // copy to set the new state
    const task = newTasks.find((task) => task.id === id);
    task.isCompleted = !task.isCompleted;
    setTasks(newTasks);
  }
  function addTask(e) {
    const name = taskNameRef.current.value;
    if (name === "") return;
    // setTasks([...tasks, { id: key, name: name, isCompleted: false}])
    setTasks([...tasks, { id: uuidv4(), name: name, isCompleted: false }]);
    taskNameRef.current.value = null; // clear input after click
  }
  // Its empty as we don't have any tasks

  function clearTasks() {
    const newTasks = tasks.filter((task) => !task.isCompleted)
    console.log(newTasks);
    setTasks(newTasks);
  }
  return (
    <>
      {/* Called a fragrament, allows up to return more than one element by rapping the element within this syntax tree */}
      <input ref={taskNameRef} type="text" />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
      <button type="button" onClick={clearTasks}>Clear Task</button>
      <div>
        Number of Tasks: {tasks.filter((task) => !task.isCompleted).length}
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </>
  );
}

export default App;
