import { createBrowserRouter, redirect } from "react-router";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { localAuth } from "../utils/local-auth";

const redirectAuthenticatedUsers = () => {
  if (localAuth.hasSession()) {
    throw redirect("/home");
  }
};

const requireAuthentication = () => {
  if (!localAuth.hasSession()) {
    throw redirect("/login");
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/home",
    Component: HomePage,
    loader: requireAuthentication,
  },
  {
    path: "/register",
    Component: RegisterPage,
    loader: redirectAuthenticatedUsers,
  },
  {
    path: "/login",
    Component: LoginPage,
    loader: redirectAuthenticatedUsers,
  },
]);
