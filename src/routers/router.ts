import { createBrowserRouter, redirect } from "react-router";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const middlewareLogin = () => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    throw redirect("/home");
  }
};

const middlewareHome = () => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    throw redirect("/login");
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: middlewareHome,
  },
  {
    path: "/home",
    Component: HomePage,
    loader: middlewareHome,
  },
  {
    path: "/register",
    Component: RegisterPage,
    loader: middlewareLogin,
  },
  {
    path: "/login",
    Component: LoginPage,
    loader: middlewareLogin,
  },
]);
