import { TaskStatus } from "src/types/task";
import InlineSelect from "./InlineSelect";
import InlineTextEditor from "./InlineTextEditor";
import { useState } from "react";
import type { Task } from "src/types/task";

export function TaskCard({ task, updateTask, deleteTask }: { task: Task; updateTask: (id: string, updates: Partial<Task>) => void; deleteTask: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);

  const firstLine = task.description.split("\n")[0];

  return (
    <div
      className={`task-card ${expanded ? "expanded" : "collapsed"}`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* COLLAPSED VIEW */}
      {!expanded && (
        <div className="task-collapsed">
          <div className="task-title-line">{firstLine}</div>
        </div>
      )}

      {/* EXPANDED VIEW */}
      {expanded && (
        <div className="task-expanded" onClick={(e) => e.stopPropagation()}>
          <InlineTextEditor
            value={task.description}
            onSave={(value) => updateTask(task.id, { description: value })}
          />

          <div className="task-row">
            <label>Ansvarlig</label>
            <InlineSelect
              value={task.assignedUserId}
              options={["user1", "user2", "user3"]} // replace with real users
              onSave={(value) => updateTask(task.id, { assignedUserId: value })}
            />
          </div>

          <div className="task-row">
            <label>Status</label>
            <InlineSelect
              value={task.status}
              options={Object.values(TaskStatus)}
              onSave={(value) => updateTask(task.id, { status: value as TaskStatus })}
            />
          </div>

          <button
            className="delete-task-btn"
            onClick={() => deleteTask(task.id)}
          >
            Slett
          </button>
        </div>
      )}
    </div>
  );
}
