import { createBrowserRouter, redirect } from "react-router";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { localAuth } from "../utils/local-auth";

const middlewareLogin = () => {
  if (localAuth.hasSession()) {
    throw redirect("/home");
  }
};

const middlewareHome = () => {
  if (!localAuth.hasSession()) {
    throw redirect("/login");
  }
};

const middlewareRoot = () => {
    throw redirect("/login");
};


export const router = createBrowserRouter([
  {
    path: "/",
    loader: middlewareRoot,
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
