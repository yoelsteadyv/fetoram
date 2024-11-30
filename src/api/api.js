import axios from "axios";

const api = axios.create({
  baseURL: "https://betoram.vercel.app", // URL backend-mu di Vercel
  withCredentials: true, // Penting untuk mengirim cookie jika backend menggunakan session
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
