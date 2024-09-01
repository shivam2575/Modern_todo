import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "To Do",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "To Do",
      tags: [],
    });
  };

  const handleSelect = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          value={taskData.task}
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="Enter you task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={handleSelect}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={handleSelect}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={handleSelect}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={handleSelect}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
