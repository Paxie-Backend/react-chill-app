import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import "../styles/main.css";
import "../styles/authentication.css";
import AuthHeader from "../components/AuthHeader";
import AuthAction from "../components/AuthAction";

const DATA_DUMMY = "admin";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!username.trim() || !password.trim()) {
      setErrorLogin(false);
      return;
    }

    const credsAreValid =
      username.trim() === DATA_DUMMY && password.trim() === DATA_DUMMY;

    setErrorLogin(!credsAreValid);

    if (credsAreValid) {
      navigate("/home");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value.trim());
  };

  const handlePassword = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="auth-page login-page">
      <main className="auth-card">
        <AuthHeader
          title={"Masuk"}
          greeting={"Selamat datang kembali!"}
          isError={errorLogin}
        />

        <form onSubmit={handleFormSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required={true}
              placeholder="Masukkan username"
              onChange={handleUsername}
            />

            <span
              className="body-small-regular error-label"
              style={{
                display: submitted && !username.trim() ? "block" : "none",
              }}
            >
              Username is required
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              required={true}
              onChange={handlePassword}
            />
            <span
              className="body-small-regular error-label"
              style={{
                display: submitted && !password.trim() ? "block" : "none",
              }}
            >
              Password is required
            </span>

            <img
              src="../assets/images/eye-off.svg"
              alt="eye-off"
              className="form-group__icon"
              onClick={handleShowPassword}
            />
            <div className="form-links">
              <p>
                Sudah terdaftar? <NavLink to="/register">Daftar</NavLink>
              </p>
            </div>
          </div>

          <AuthAction textBtn={"Masuk"} />
        </form>
      </main>
    </div>
  );
}
