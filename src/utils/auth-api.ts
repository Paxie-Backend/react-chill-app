import axios from "axios";
import { API_KEY, ACCESS_TOKEN } from "../lib/constants";

export const authApi = axios.create({
  baseURL: "https://dytuputtiertanijmjev.supabase.co",
  headers: {
    "Content-Type": "application/json",
    apikey: API_KEY,
  },
});

authApi.interceptors.request.use(
  (request) => {
    if (ACCESS_TOKEN) {
      request.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    }
    console.log("Request sent:", request.method?.toUpperCase(), request.url);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
