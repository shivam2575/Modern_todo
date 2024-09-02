import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import tempImg from "./assets/logo192.png";

const oldData = localStorage.getItem("tasks");
console.log(oldData);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldData) || []);
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to ${status} and on position ${position}`
    );
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);
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
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          icon={tempImg}
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Completed"
          icon={tempImg}
          tasks={tasks}
          status="Completed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
