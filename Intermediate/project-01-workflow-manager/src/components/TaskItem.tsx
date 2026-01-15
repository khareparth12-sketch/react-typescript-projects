import type { Task, TaskStatus } from "../types/task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: TaskStatus) => void;
}

function TaskItem({ task, onDelete, onStatusChange }: TaskItemProps) {
  function getNextStatus(current: TaskStatus): TaskStatus {
    if (current === "todo") return "in-progress";
    if (current === "in-progress") return "done";
    return "todo";
  }

  return (
    <li>
      <strong>{task.title}</strong> — {task.priority} — {task.status}

      <button
        onClick={() =>
          onStatusChange(task.id, getNextStatus(task.status))
        }
      >
        Advance
      </button>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
