import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../styles/Parking.css";

export default function RegisterExit() {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");

  async function handleRegistrarSaida() {
    if (!placa) return alert("Digite a placa!");

    try {
      const response = await api.put("/api/veiculos/saida", { placa: placa });
      
      const valor = response.data.valorPago || ""; 
      
      alert(`Saída registrada! ${valor ? "Valor a pagar: R$ " + valor : ""}`);
      navigate("/active-cars");
    } catch (error) {
      console.error(error);
      alert("Erro ao registrar saída. Verifique se a placa está correta." + error);
    }
  }

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Saída de Veículo</h2>

        <div className="input-all">
          <input 
            type="text" 
            placeholder="Placa" 
            className="input" 
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
          />

          <button className="yellow-btn" onClick={handleRegistrarSaida} style={{ marginTop: "10px" }}>
            Registrar Saída
          </button>

           <button className="yellow-btn" onClick={() => navigate("/active-cars")}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}