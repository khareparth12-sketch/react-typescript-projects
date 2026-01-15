import { useState } from "react";
import type { Task, TaskStatus } from "./types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
      prev.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Workflow Manager</h1>

      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;
