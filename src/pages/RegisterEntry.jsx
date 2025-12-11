import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../styles/Parking.css";

export default function RegisterEntry() {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");

  async function handleRegistrarEntrada() {
    if (!placa) return alert("Digite a placa!");

    try {
      await api.post("/api/veiculos/entrada", { placa: placa });
      
      alert("Entrada registrada com sucesso!");
      navigate("/active-cars");
    } catch (error) {
      console.error(error);
      alert("Erro ao registrar entrada. Verifique se a placa já não está no pátio.");
    }
  }

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Entrada de Veículos</h2>

        <div className="input-all">
          <input 
            type="text" 
            placeholder="Placa" 
            className="input" 
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
          />

          <button className="yellow-btn" onClick={handleRegistrarEntrada}>
            Registrar Entrada
          </button>
          
          <button className="yellow-btn" onClick={() => navigate("/active-cars")} >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}