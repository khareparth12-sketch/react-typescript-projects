import { useAuth } from "../auth/AuthContext";
import { ROLES } from "../auth/roles";

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        Welcome <strong>{user.name}</strong> — Role:{" "}
        <strong>{user.role}</strong>
      </p>

      {user.role === ROLES.ADMIN && (
        <section>
          <h3>Admin Panel</h3>
          <p>Full system access</p>
        </section>
      )}

      {user.role === ROLES.MANAGER && (
        <section>
          <h3>Manager Panel</h3>
          <p>Team & reports access</p>
        </section>
      )}

      {user.role === ROLES.USER && (
        <section>
          <h3>User Panel</h3>
          <p>Basic access</p>
        </section>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}
    