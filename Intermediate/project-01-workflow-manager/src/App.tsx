import { useState, useEffect } from "react";
import type { Task, TaskStatus } from "./types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [filterStatus, setFilterStatus] = useState<TaskStatus | "all">("all");
  const [sortByPriority, setSortByPriority] = useState<"none" | "priority">(
    "none",
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const visibleTasks = [...tasks]
    .filter((task) =>
      filterStatus === "all" ? true : task.status === filterStatus,
    )
    .sort((a, b) => {
      if (sortByPriority === "none") return 0;

      const priorityOrder = {
        high: 3,
        medium: 2,
        low: 1,
      };

      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  function handleAddTask(title: string, priority: Task["priority"]) {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: "todo",
      priority,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function handleDeleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleStatusChange(id: number, status: TaskStatus) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Task Workflow Manager</h1>
      </header>

      <section className="controls">
        <TaskForm onAddTask={handleAddTask} />

        <div className="filters">
          <select
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value as TaskStatus | "all")
            }
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <button
            onClick={() =>
              setSortByPriority(sortByPriority === "none" ? "priority" : "none")
            }
          >
            {sortByPriority === "none" ? "Sort by Priority" : "Clear Sort"}
          </button>
        </div>
      </section>

      <section className="list">
        <TaskList
          tasks={visibleTasks}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      </section>
    </div>
  );
}

export default App;
