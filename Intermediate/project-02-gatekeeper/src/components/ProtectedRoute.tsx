import type { ReactNode } from "react";
import { useAuth } from "../auth/AuthContext";
import type { Role } from "../auth/roles";

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?: Role[];
};

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <div>Please login first</div>;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <div>Unauthorized access</div>;
  }

  return <>{children}</>;
}
