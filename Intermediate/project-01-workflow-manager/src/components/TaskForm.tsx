import { useState } from "react";
import type { TaskPriority, TaskStatus } from "../types/task";

interface TaskFormProps {
  onAddTask: (title: string, priority: TaskPriority) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (title.trim() === "") return;

    onAddTask(title, priority);
    setTitle("");
    setPriority("medium");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
