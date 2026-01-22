import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-14 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h2 className="font-semibold text-gray-700">Dashboard</h2>

      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {user.name} · {user.role}
          </span>
          <button
            onClick={logout}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
