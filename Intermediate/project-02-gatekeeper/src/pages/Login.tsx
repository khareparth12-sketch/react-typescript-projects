import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { ROLES } from "../auth/roles";
import type { Role } from "../auth/roles";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { login, isAuthenticated, user } = useAuth();
  const [selectedRole, setSelectedRole] = useState<Role>(ROLES.USER);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  if (isAuthenticated && user) {
    return (
      <div>
        <h2>You are logged in</h2>
        <p>
          Welcome <strong>{user.name}</strong> — Role:{" "}
          <strong>{user.role}</strong>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>GateKeeper Login</h2>

      <label>
        Select Role:
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as Role)}
        >
          <option value={ROLES.ADMIN}>Admin</option>
          <option value={ROLES.MANAGER}>Manager</option>
          <option value={ROLES.USER}>User</option>
        </select>
      </label>

      <br />
      <br />

      <button onClick={() => login(selectedRole)}>Login</button>
    </div>
  );
}
