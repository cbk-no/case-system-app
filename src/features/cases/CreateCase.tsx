import { useState } from "react";
import { useUsers } from "src/hooks/useUsers";
import { useCreateCase } from "src/hooks/useCreateCase";
import { CasePriority, CaseStatus, CaseType } from "src/types/case";
import UserSelect from "./components/UserSelect";
import "./CreateCase.css";
import { useNavigate } from "react-router";
import { useToast } from "src/components/toast/useToast";
import ToastContainer from "src/components/toast/ToastContainer";

export default function CreateCasePage() {
  const { data: users } = useUsers();
  const navigate = useNavigate();
  const { toasts, showToast } = useToast();
  
  const createCase = useCreateCase((createdCase) => {
    showToast("Case created!");
    navigate(`/cases/${createdCase.id}`);
  });

  const [form, setForm] = useState({
    title: "",
    type: CaseType.Complaint,
    priority: CasePriority.Medium,
    status: CaseStatus.Open,
    description: "",
    emailComplainer: "",
    userInfoComplainer: "",
    dateReceived: new Date().toISOString(),
    complaintDescription: "",
    deadline: "",
    caseOwnerId: "",
  });

  function handleSubmit() {
    const payload = {
      dateReceived: form.dateReceived,
      deadline: new Date(form.deadline + "T00:00:00").toISOString(),
      title: form.title,
      type: form.type,
      complaintDescription: form.complaintDescription,
      priority: form.priority,
      status: form.status,
      description: form.description,
      emailComplainer: form.emailComplainer,
      userInfoComplainer: form.userInfoComplainer,
      caseOwnerId: form.caseOwnerId,
    };

    console.log("Submitting payload:", payload);
    createCase.mutate(payload);
  }

  return (
    <div className="create-case-page">
      <h1 className="create-case-title">Opprett ny sak</h1>

      <div className="form-card">
        <h2>Case Information</h2>

        <div className="form-grid">
          <input
            placeholder="Tittel"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value as CaseType })
            }
          >
            {Object.values(CaseType).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value as CasePriority })
            }
          >
            {Object.values(CasePriority).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
          />
        </div>
      </div>

      <div className="form-card">
        <h2>Caseworker</h2>
        <UserSelect
          users={users ?? []}
          value={form.caseOwnerId}
          onChange={(id: string) => setForm({ ...form, caseOwnerId: id })}
        />
      </div>

      <div className="form-card">
        <h2>Complaint Information</h2>

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="email complainer"
          value={form.emailComplainer}
          onChange={(e) =>
            setForm({ ...form, emailComplainer: e.target.value })
          }
        />

        <input
          placeholder="User info complainer"
          value={form.userInfoComplainer}
          onChange={(e) =>
            setForm({ ...form, userInfoComplainer: e.target.value })
          }
        />

        <textarea
          placeholder="Complaint Description"
          value={form.complaintDescription}
          onChange={(e) =>
            setForm({ ...form, complaintDescription: e.target.value })
          }
        />
      </div>

      <button className="create-case-btn" onClick={handleSubmit}>
        Create case
      </button>
      <ToastContainer toasts={toasts} />
    </div>
  );
}
