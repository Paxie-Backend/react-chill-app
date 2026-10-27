import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const root = document.getElementById("root");

if (!root) {
  throw new Error('Root element with id "root" was not found ');
}

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
