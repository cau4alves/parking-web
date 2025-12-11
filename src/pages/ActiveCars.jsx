import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api"; 
import "../styles/Parking.css";

export default function ActiveCars() {
  const navigate = useNavigate();
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get("/api/veiculos"); 
        setVeiculos(response.data);
      } catch (error) {
        console.error("Erro ao carregar veículos", error);
        alert("Erro ao buscar veículos ativos.");
      }
    }

    loadCars();
  }, []);

 

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Carros ativos</h2>

        <div className="cars-list" style={{ maxHeight: "300px", overflowY: "auto", width: "100%" }}>
          {veiculos.length === 0 ? (
            <p style={{textAlign: "center", color: "#666"}}>Nenhum veículo estacionado.</p>
          ) : (
            veiculos.map((carro) => (
              <div key={carro.id} className="car-card" style={{ marginBottom: "10px" }}>
                <strong>Placa:</strong> {carro.placa}<br/>
                <strong>Entrada:</strong> {carro.horarioEntrada}
              </div>
            ))
          )}
        </div>

        <div className="btn-row" style={{ marginTop: "20px" }}>
          <button className="yellow-btn" onClick={() => navigate("/register-entry")}>
            Registrar Entrada
          </button>

          <button className="yellow-btn" onClick={() => navigate("/register-exit")}>
            Registrar Saída
          </button>
        </div>

      </div>
    </div>
  );
}