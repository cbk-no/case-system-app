import { type User } from "src/types/user";
import "./UserSelect.css";

export default function UserSelect({
  users,
  value,
  onChange,
}: {
  users: User[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <select
      className="user-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Velg saksbehandler</option>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name} ({u.role})
        </option>
      ))}
    </select>
  );
}
