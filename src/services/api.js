import axios from "axios";

const api = axios.create({
  baseURL: "https://parking-api-6xqa.onrender.com", 
});

export default api;
