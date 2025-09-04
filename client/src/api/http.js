import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:4000/api",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
