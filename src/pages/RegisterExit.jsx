import { useNavigate } from "react-router-dom";
import "../styles/Parking.css";

export default function RegisterExit() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Saída de Veículo</h2>

        <input type="text" placeholder="Placa" className="input" />

        <button className="yellow-btn" onClick={() => navigate("/active-cars")} style={{ marginTop: "10px" }}>
          Registrar Saída
        </button>

      </div>
    </div>
  );
}
