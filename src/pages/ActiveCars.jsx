import { useNavigate } from "react-router-dom";
import "../styles/Parking.css";

export default function ActiveCars() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Carros ativos</h2>

        <div className="car-card">
          <strong>Placa:</strong> ABC1D34<br/>
          <strong>Entrada:</strong> 12:00
        </div>

        <div className="btn-row">
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
