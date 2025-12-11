import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        nome,
        email,
        senha,
      });

      navigate("/login");
    } catch (error) {
      alert("Erro ao criar conta" + error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Create account</h2>

        <p className="switch-text">
          Already have an account?
          <span className="link" onClick={() => navigate("/login")}> Login</span>
        </p>


        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />

          <button className="auth-btn">Sign Up</button>
        </form>

      </div>
    </div>
  );
}
