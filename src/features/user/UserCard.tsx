import UserRoleBadge from "./UserRoleBadge";
import "./UserCard.css";
import type { User } from "src/types/user";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <div className="user-card-main">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <UserRoleBadge role={user.role} />
    </div>
  );
}
