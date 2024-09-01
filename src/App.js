import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import tempImg from "./assets/logo192.png";

const oldData = localStorage.getItem("tasks");
console.log(oldData);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldData) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={tempImg}
          tasks={tasks}
          status="To Do"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="In Progress"
          icon={tempImg}
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Completed"
          icon={tempImg}
          tasks={tasks}
          status="Completed"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
