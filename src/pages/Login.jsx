import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", { email, senha });

      localStorage.setItem("token", response.data.token);

      navigate("/active-cars");
    } catch (error) {
      alert("Credenciais inválidas" + error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign in to your Account</h2>

        <p className="switch-text">
          Don’t have an account?
          <span className="link" onClick={() => navigate("/signup")}> Sign Up</span>
        </p>


        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="auth-btn" type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
