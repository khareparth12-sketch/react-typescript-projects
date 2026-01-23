import type { Task, TaskStatus } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: TaskStatus) => void;
}

function TaskList({ tasks, onDelete, onStatusChange }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one 👀</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}

export default TaskList;
