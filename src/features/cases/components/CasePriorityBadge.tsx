import "./CasePriorityBadge.css";

export default function CasePriorityBadge({ priority }: { priority: string }) {
  return (
    <span className={`priority-badge priority-${priority.toLowerCase()}`}>
      {priority}
    </span>
  );
}
