import { useParams } from "react-router";
import "./CaseDetailsPage.css";
import InlineTextEditor from "./components/InlineTextEditor";
import InlineSelect from "./components/InlineSelect";
import InlineDatePicker from "./components/InlineDatePicker";
import TasksSection from "./components/TasksSection";
import { TaskCard } from "./components/TaskCard";
import { useCaseTasks } from "src/hooks/useCaseTasks";
import { useCaseDetails } from "src/hooks/useCaseDetails";
import { CasePriority, CaseStatus, CaseType } from "src/types/case";
import { TaskStatus } from "src/types/task";

export default function CaseDetailsPage() {
  const { id } = useParams();
  const { caseItem, updateCase, isLoading, error } = useCaseDetails(id!);
  const { tasks, addTask, updateTask, deleteTask } = useCaseTasks(id!);

  if (isLoading) return <div className="loading">Laster…</div>;
  if (error) return <div className="error">Kunne ikke laste saken</div>;

  if (!caseItem) return <div className="error">Saken finnes ikke</div>;

  return (
    <div className="case-page">
      <div className="case-card">
        {/* TITLE */}
        <h1>{caseItem.title}</h1>

        {/* TOP GRID: TYPE, PRIORITY, STATUS, DATES */}
        <div className="case-grid">
          <div>
            <h3>Type</h3>
            <InlineSelect
              value={caseItem.type}
              options={Object.values(CaseType)}
              onSave={(value) => updateCase({ type: value as CaseType })}
            />
          </div>

          <div>
            <h3>Prioritet</h3>
            <InlineSelect
              value={caseItem.priority}
              options={Object.values(CasePriority)}
              onSave={(value) =>
                updateCase({ priority: value as CasePriority })
              }
            />
          </div>

          <div>
            <h3>Status</h3>
            <InlineSelect
              value={caseItem.status}
              options={Object.values(CaseStatus)}
              onSave={(value) => updateCase({ status: value as CaseStatus })}
            />
          </div>

          <div>
            <h3>Mottatt</h3>
            <div>
              {new Date(caseItem.dateReceived).toLocaleDateString("no-NO")}
            </div>
          </div>

          <div>
            <h3>Frist</h3>
            <InlineDatePicker
              value={caseItem.deadline}
              onSave={(value) => {
                updateCase({ deadline: value });
              }}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="case-section">
          <h3>Beskrivelse</h3>
          <InlineTextEditor
            value={caseItem.description}
            onSave={(value) => updateCase({ description: value })}
          />
        </div>

        {/* COMPLAINT INFO */}
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

        {/* TASKS */}
        <div className="case-section">
          <div className="section-header">
            <h3>Oppgaver</h3>
            <button
              className="add-task-btn"
              onClick={() => addTask("Ny oppgave")}
            >
              + Ny oppgave
            </button>
          </div>

          <div className="task-list">
            {tasks.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
