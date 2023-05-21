import axios from "axios";

// Connecting the frontend to the backend.
const client = axios.create({
  baseURL: "https://movierate-backend-k389l.ondigitalocean.app/api", // Deployment.
  // baseURL: "http://localhost:8000/api", // Production.
});

export default client;
