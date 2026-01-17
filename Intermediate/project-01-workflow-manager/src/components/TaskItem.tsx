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
    <li className="task-card">
      <div>
        <strong>{task.title}</strong>
        <div className="meta">
          <span className={`badge ${task.priority}`}>{task.priority}</span>
          <span className={`badge status ${task.status}`}>{task.status}</span>
        </div>
      </div>

      <div className="actions">
        <button
          onClick={() => onStatusChange(task.id, getNextStatus(task.status))}
        >
          Advance
        </button>
        <button className="danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
