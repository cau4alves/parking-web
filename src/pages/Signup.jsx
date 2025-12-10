import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Create account</h2>
        <p className="switch-text">
          Already have an account?
          <span className="link" onClick={() => navigate("/")}> Login</span>
        </p>

        <form onSubmit={(e) => { e.preventDefault(); navigate("/active-cars"); }}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="auth-btn">Sign Up</button>
        </form>

      </div>
    </div>
  );
}
