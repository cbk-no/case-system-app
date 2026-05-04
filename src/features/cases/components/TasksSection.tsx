import { useState } from "react";
import InlineTextEditor from "./InlineTextEditor";
import type { Task } from "src/types/task";


export interface TasksSectionProps {
  tasks: Task[];
  addTask: (description: string) => void;
  updateTask: (taskId: string, update: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
}

export default function TasksSection({
  tasks,
  addTask,
  updateTask,
  deleteTask,
}: TasksSectionProps) {
  const [newTask, setNewTask] = useState("");

  return (
    <section>

      <input
        placeholder="Ny oppgave…"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(newTask);
          setNewTask("");
        }}
      >
        Legg til
      </button>
    </section>
  );
}
