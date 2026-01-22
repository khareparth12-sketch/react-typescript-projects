import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { ROLES } from "../auth/roles";

export default function Sidebar() {
  const { user } = useAuth();
  if (!user) return null;

  const base =
    "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition";

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">GateKeeper</h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={base}>
          Dashboard
        </NavLink>

        {user.role === ROLES.ADMIN && (
          <NavLink to="/admin" className={base}>
            Admin Panel
          </NavLink>
        )}

        {user.role !== ROLES.USER && (
          <NavLink to="/reports" className={base}>
            Reports
          </NavLink>
        )}
      </nav>

      <div className="mt-auto text-xs text-gray-400">
        Logged in as {user.role}
      </div>
    </aside>
  );
}
