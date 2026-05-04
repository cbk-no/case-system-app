import { useState } from "react";
import { useUsers, useCreateUser } from "src/hooks/useUsers";
import { Role } from "src/types/user";

export default function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const createUser = useCreateUser();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: Role.User,
  });

  if (isLoading) return <div>Laster brukere…</div>;

  return (
    <div className="users-page">
      <h1>Brukere</h1>

      <div className="user-form">
        <input
          placeholder="Navn"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="E‑post"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value as Role })}
        >
          {Object.values(Role).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <button onClick={() => createUser.mutate(form)}>Opprett bruker</button>
      </div>

      <ul className="user-list">
        {users?.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}
