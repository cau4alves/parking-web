import { useNavigate } from "react-router-dom";
import "../styles/Parking.css";

export default function RegisterEntry() {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-box">
        
        <h2>Entrada de Veículos</h2>

        <input type="text" placeholder="Placa" className="input" />

        <button className="yellow-btn" onClick={() => navigate("/active-cars")} style={{ marginTop: "10px" }}>
          Registrar Entrada
        </button>

      </div>
    </div>
  );
}
