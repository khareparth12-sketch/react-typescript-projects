import { createContext, useContext, useState, ReactNode } from "react";
import { Role, ROLES } from "./roles";

type User = {
  id: string;
  name: string;
  role: Role;
};

type AuthContextType = {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: Role) => {
    // fake login — backend comes later
    setUser({
      id: "1",
      name: "GateKeeper User",
      role,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// custom hook (you'll thank me later)
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
