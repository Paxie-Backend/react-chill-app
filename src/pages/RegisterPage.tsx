import { useNavigate } from "react-router";
import { useState } from "react";
import "../styles/main.css";
import "../styles/authentication.css";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";

const DATA_DUMMY = "admin";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
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

    const credsAreValid: boolean =
      username.trim() === DATA_DUMMY &&
      password.trim() === DATA_DUMMY &&
      passwordConfirm.trim() === DATA_DUMMY;

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
        <AuthForm
          handleFormSubmit={handleFormSubmit}
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          handleShowPassword={handleShowPassword}
          username={username}
          password={password}
          showPassword={showPassword}
          submitted={submitted}
          linkDesc="Sudah punya akun?"
          linkText="Masuk"
          textBtn="Daftar"
          navigateTo="/login"
          isRegisterPage={true}
          handlePasswordConfirm={handlePasswordConfirm}
          passwordConfirm={passwordConfirm}
        ></AuthForm>
      </main>
    </div>
  );
}
