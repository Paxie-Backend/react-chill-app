import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "../styles/main.css";
import "../styles/authentication.css";

import { ACCESS_TOKEN } from "../lib/constants";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!username.trim() || !password.trim()) {
      setErrorLogin(false);
      return;
    }

    const credsAreValid = await Login(username, password);

    setErrorLogin(!credsAreValid);

    if (credsAreValid) {
      navigate("/home");
    }

    setUsername("");
    setPassword("");
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
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
        <AuthHeader
          title={"Masuk"}
          greeting={"Selamat datang kembali!"}
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
          linkDesc="Belum punya akun?"
          linkText="Daftar"
          textBtn="Masuk"
          navigateTo="/register"
          isRegisterPage={false}
        />
      </main>
    </div>
  );
}

async function Login(username, password) {
  const options = {
    method: "POST",
    url: "https://dytuputtiertanijmjev.supabase.co/auth/v1/token",
    params: { grant_type: "password" },
    headers: {
      Authorization: "Bearer   sb_secret_PFrzVsZnNPvV3apbguclsw_QIUOy3pX",
      "Content-Type": "application/json",
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHVwdXR0aWVydGFuaWptamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NDcwMTcsImV4cCI6MjEwODMyMzAxN30.9j8Ur3SGzGbvq6RZlVUjrrSZnZ-Glyrtypi2CbPTDlA",
    },
    data: { email: username, password: password },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);

    localStorage.setItem("token", data.access_token);

    return true;
  } catch (error) {
    console.error(error);
  }
}
