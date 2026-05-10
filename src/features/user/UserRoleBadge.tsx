import { Role } from "src/types/user";
import "./UserRoleBadge.css";

export default function UserRoleBadge({ role }: { role: Role }) {
  return (
    <span className={`role-badge role-${role.toLowerCase()}`}>
      {role}
    </span>
  );
}
