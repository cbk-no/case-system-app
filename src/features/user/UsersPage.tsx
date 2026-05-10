import { useState } from "react";
import { useUsers, useCreateUser } from "src/hooks/useUsers";
import { Role } from "src/types/user";
import "./UsersPage.css";
import UserRoleBadge from "./UserRoleBadge";
import UserCard from "./UserCard";

export default function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const createUser = useCreateUser();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: Role.User,
  });

  function handleSubmit() {
    createUser.mutate(form);
    setForm({ name: "", email: "", role: Role.User });
  }

  if (isLoading) return <div className="users-loading">Loading users…</div>;

  return (
    <div className="users-page">
      <h1 className="users-title">User Administration</h1>

      {/* CREATE USER FORM */}
      <div className="user-form-card">
        <h2>Create New User</h2>

        <div className="user-form-grid">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
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

          <button className="create-user-btn" onClick={handleSubmit}>
            Create User
          </button>
        </div>
      </div>

      {/* USER LIST */}
      <div className="users-list">
        {users?.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
