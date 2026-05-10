import "./CaseStatusBadge.css";

export default function CaseStatusBadge({ status }: { status: string }) {
  return <span className={`status-badge status-${status.toLowerCase()}`}>{status}</span>;
}
