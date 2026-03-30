import { useState } from "react";
import InlineTextEditor from "./InlineTextEditor";

export interface Task {
  id: string;
  description: string;
}

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
      <h3>Oppgaver</h3>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <InlineTextEditor
              value={t.description}
              onSave={(value) => updateTask(t.id, { description: value })}
            />
            <button onClick={() => deleteTask(t.id)}>Slett</button>
          </li>
        ))}
      </ul>

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
