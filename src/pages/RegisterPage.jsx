import { useNavigate } from "react-router";
import { useState } from "react";
import "../styles/main.css";
import "../styles/authentication.css";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";

const DATA_DUMMY = "admin";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
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

    const credsAreValid =
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

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
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
        <AuthHeader
          title={"Daftar"}
          greeting={"Selamat datang!"}
          isError={errorLogin}
        />
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
