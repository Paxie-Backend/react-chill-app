import axios from "axios";

export const authApi = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_API_KEY,
  },
});

authApi.interceptors.request.use(
  (request) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      request.headers["Authorization"] = `Bearer ${access_token}`;
    }
    console.log("Request sent:", request.method?.toUpperCase(), request.url);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
