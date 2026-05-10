import { useParams } from "react-router";
import "./CaseDetailsPage.css";
import InlineTextEditor from "./components/InlineTextEditor";
import InlineSelect from "./components/InlineSelect";
import InlineDatePicker from "./components/InlineDatePicker";
import { useCaseTasks } from "src/hooks/useCaseTasks";
import { useCaseDetails } from "src/hooks/useCaseDetails";
import { CasePriority, CaseStatus, CaseType } from "src/types/case";
import { TaskStatus } from "src/types/task";
import { useUsers } from "src/hooks/useUsers";
import { TaskCard } from "./components/TaskCard";
import { useState } from "react";

export default function CaseDetailsPage() {
  const { id } = useParams();
  const { caseItem, updateCase, isLoading, error } = useCaseDetails(id!);
  const { tasks, addTask, updateTask, deleteTask } = useCaseTasks(id!);
  const { data: users } = useUsers();
  const [newTask, setNewTask] = useState({
    description: "",
    assignedUserId: "",
  });
  if (isLoading) return <div className="loading">Laster…</div>;
  if (error) return <div className="error">Kunne ikke laste saken</div>;
  if (!caseItem) return <div className="error">Saken finnes ikke</div>;

  return (
    <div className="case-details-page">
      {/* LEFT COLUMN — CASE INFO */}
      <div className="case-info-card">
        <h1 className="case-title">{caseItem.title}</h1>

        <div className="case-grid">
          <div>
            <h3>Type</h3>
            <InlineSelect
              value={caseItem.type}
              options={Object.values(CaseType).map((v) => ({ label: v, value: v }))}
              onSave={(value) => updateCase({ type: value as CaseType })}
            />
          </div>

          <div>
            <h3>Prioritet</h3>
            <InlineSelect
              value={caseItem.priority}
              options={Object.values(CasePriority).map((v) => ({ label: v, value: v }))}
              onSave={(value) =>
                updateCase({ priority: value as CasePriority })
              }
            />
          </div>

          <div>
            <h3>Status</h3>
            <InlineSelect
              value={caseItem.status}
              options={Object.values(CaseStatus).map((v) => ({ label: v, value: v }))}
              onSave={(value) => updateCase({ status: value as CaseStatus })}
            />
          </div>

          <div>
            <h3>Mottatt</h3>
            <p>{new Date(caseItem.dateReceived).toLocaleDateString("no-NO")}</p>
          </div>

          <div>
            <h3>Frist</h3>
            <InlineDatePicker
              value={caseItem.deadline}
              onSave={(value) => updateCase({ deadline: value })}
            />
          </div>
        </div>

        <div className="case-section">
          <h3>Beskrivelse</h3>
          <InlineTextEditor
            value={caseItem.description}
            onSave={(value) => updateCase({ description: value })}
          />
        </div>

        <div className="case-section">
          <h3>Klageinformasjon</h3>
          <p>
            <strong>E‑post:</strong> {caseItem.emailComplainer}
          </p>
          <p>
            <strong>Brukerinfo:</strong> {caseItem.userInfoComplainer}
          </p>
          <p>
            <strong>Klagebeskrivelse:</strong>
          </p>
          <p>{caseItem.complaintDescription}</p>
        </div>
      </div>

      {/* RIGHT COLUMN — TASKS */}
      <div className="tasks-card">
        <div className="tasks-header">
          <h2>Oppgaver</h2>
        </div>

        {/* CREATE TASK */}
        <div className="task-create-form">
          <input
            placeholder="Task Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />

          <select
            value={newTask.assignedUserId}
            onChange={(e) =>
              setNewTask({ ...newTask, assignedUserId: e.target.value })
            }
          >
            <option value="">Assign user</option>
            {users?.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>

          <button
            className="task-create-btn"
            onClick={() => {
              addTask(newTask.description, newTask.assignedUserId);
              setNewTask({ description: "", assignedUserId: "" });
            }}
          >
            + Add task
          </button>
        </div>

        {/* TASK LIST */}
        <div className="task-list">
          {tasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              users={users}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
