import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to GateKeeper</h1>
      <p>Access control system demo</p>

      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}
