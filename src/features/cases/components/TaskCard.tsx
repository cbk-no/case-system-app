import { TaskStatus, type Task } from "src/types/task";
import InlineSelect from "./InlineSelect";
import InlineTextEditor from "./InlineTextEditor";
import { useState } from "react";
import "./TaskCard.css";

export function TaskCard({
  task,
  users,
  updateTask,
  deleteTask,
}: {
  task: Task;
  users: { id: string; name: string }[] | undefined;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}) {
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

          <div className="task-meta">
            <span
              className={`task-status-badge status-${task.status.toLowerCase()}`}
            >
              {task.status}
            </span>

            {task.assignedUserId && (
              <span className="task-user">
                {users?.find((u) => u.id === task.assignedUserId)?.name}
              </span>
            )}
          </div>
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
            <label>Responsible user </label>
            <InlineSelect
              value={task.assignedUserId || ""}
              options={[
                { label: "Ikke tildelt", value: "" },
                ...(users?.map((u) => ({
                  label: u.name,
                  value: u.id,
                })) ?? []),
              ]}
              onSave={(value) =>
                updateTask(task.id, { assignedUserId: value })
              }
            />
          </div>

          <div className="task-row">
            <label>Status</label>
            <InlineSelect
              value={task.status}
              options={Object.values(TaskStatus).map((v) => ({
                label: v,
                value: v,
              }))}
              onSave={(value) =>
                updateTask(task.id, { status: value as TaskStatus })
              }
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
