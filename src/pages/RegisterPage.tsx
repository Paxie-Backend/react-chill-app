import { useNavigate } from "react-router";
import { useState, useMemo } from "react";

import "../styles/main.css";
import "../styles/authentication.css";

import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";

import { authApi } from "../utils/auth-api";
import { PasswordContext, SubmittedContext, UsernameContext } from "../context/user-auth";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  const usernameContextValue = useMemo(() => ({ username, setUsername }), [username, setUsername]);

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!username.trim() || !password.trim() || !passwordConfirm.trim()) {
      setErrorLogin(false);
      return;
    }

    if (password.trim() !== passwordConfirm.trim()) {
      setErrorLogin(false);
      return;
    }

    const credsAreValid: boolean = await register(username, password);

    setErrorLogin(!credsAreValid);

    if (credsAreValid) {
      navigate("/login");
    }

    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  };

  const register = async (username: string, password: string) => {
    const payload = { email: username, password: password };

    try {
      const { data } = await authApi.post("/auth/v1/signup", payload, {
        params: { grant_type: "password" },
      });
      localStorage.setItem("access_token", data.access_token);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="auth-page register-page">
      <main className="auth-card">
        <AuthHeader title={"Daftar"} greeting={"Selamat datang!"} isError={errorLogin} />
        <UsernameContext.Provider value={usernameContextValue}>
          <PasswordContext.Provider value={password}>
            <SubmittedContext.Provider value={submitted}>
              <AuthForm
                handleFormSubmit={handleFormSubmit}
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handleShowPassword={handleShowPassword}
                showPassword={showPassword}
                linkDesc="Sudah punya akun?"
                linkText="Masuk"
                textBtn="Daftar"
                navigateTo="/login"
                isRegisterPage={true}
                handlePasswordConfirm={handlePasswordConfirm}
                passwordConfirm={passwordConfirm}
              ></AuthForm>
            </SubmittedContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </main>
    </div>
  );
}
