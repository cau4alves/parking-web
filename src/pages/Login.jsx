import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Sign in to your Account</h2>
        <p className="switch-text">
          Don’t have an account?
          <span className="link" onClick={() => navigate("/signup")}> Sign Up</span>
        </p>

        <form onSubmit={(e) => { e.preventDefault(); navigate("/active-cars"); }}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="auth-btn" type="submit">Log in</button>
        </form>

      </div>
    </div>
  );
}
