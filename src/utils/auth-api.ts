import axios from "axios";
import { API_KEY } from "../lib/constants";

export const authApi = axios.create({
  baseURL: "https://dytuputtiertanijmjev.supabase.co",
  headers: {
    "Content-Type": "application/json",
    apikey: API_KEY,
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
