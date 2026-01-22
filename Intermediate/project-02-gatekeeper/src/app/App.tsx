import { AuthProvider } from "../auth/AuthContext";
import { AppRouter } from "./router";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}
