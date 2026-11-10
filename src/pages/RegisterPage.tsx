import { useNavigate } from "react-router";
import { useState, useMemo } from "react";

import "../styles/main.css";
import "../styles/authentication.css";

import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";

import { PasswordContext, SubmittedContext, UsernameContext } from "../context/user-auth";
import { localAuth } from "../utils/local-auth";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  const usernameContextValue = useMemo(() => ({ username, setUsername }), [username, setUsername]);
  const passwordContextValue = useMemo(() => ({ password, setPassword }), [password, setPassword]);

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

    let credsAreValid = false;
    try {
      credsAreValid = await localAuth.create(username, password);
    } catch (error) {
      console.error("Failed to register user:", error);
    }

    setErrorLogin(!credsAreValid);

    if (credsAreValid) {
      navigate("/login");
    }

    setUsername("");
    setPassword("");
    setPasswordConfirm("");
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
          <PasswordContext.Provider value={passwordContextValue}>
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
