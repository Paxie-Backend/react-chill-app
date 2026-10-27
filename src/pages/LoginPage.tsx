import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";

import "../styles/main.css";
import "../styles/authentication.css";

import { ACCESS_TOKEN } from "../lib/constants";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";
import { authApi } from "../utils/auth-api";
import { PasswordContext, SubmittedContext, UsernameContext } from "../context/user-auth";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  const usernameContextValue = useMemo(() => ({ username, setUsername }), [username, setUsername]);
  const passwordContextValue = useMemo(() => ({ password, setPassword }), [password, setPassword]);

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitted(true);

    if (!username.trim() || !password.trim()) {
      setErrorLogin(false);
      return;
    }

    const credsAreValid = await login(username, password);

    setErrorLogin(!credsAreValid);

    if (credsAreValid) {
      navigate("/home");
    }

    setUsername("");
    setPassword("");
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = (): void => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  useEffect(() => {
    if (ACCESS_TOKEN) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="auth-page login-page">
      <main className="auth-card">
        <AuthHeader title={"Masuk"} greeting={"Selamat datang kembali!"} isError={errorLogin} />
        <UsernameContext.Provider value={usernameContextValue}>
          <PasswordContext.Provider value={passwordContextValue}>
            <SubmittedContext.Provider value={submitted}>
              <AuthForm
                handleFormSubmit={handleFormSubmit}
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handleShowPassword={handleShowPassword}
                showPassword={showPassword}
                linkDesc="Belum punya akun?"
                linkText="Daftar"
                textBtn="Masuk"
                navigateTo="/register"
                isRegisterPage={false}
              />
            </SubmittedContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </main>
    </div>
  );
}

async function login(username: string, password: string) {
  const payload = { email: username, password: password };

  try {
    const { data } = await authApi.post("/auth/v1/token", payload, {
      params: { grant_type: "password" },
    });

    localStorage.setItem("access_token", data.access_token);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
