import axios from "axios";

const api = axios.create({
  baseURL: "https://betoram.vercel.app",
  withCredentials: true, // Penting
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("Request Config:", config); // Debug
  return config;
});

export default api;
