import { NavLink } from "react-router";
import AuthAction from "../components/AuthAction";
import AuthTextField from "./AuthTextField";
import AuthPasswordField from "./AuthPasswordField";

export default function Form(props) {
  const {
    handleFormSubmit,
    handleUsername,
    handlePassword,
    handleShowPassword,
    username,
    password,
    showPassword,
    submitted,
  } = props;

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <AuthTextField
          props={{
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Masukkan username",
            submitted: submitted,
            username: username,
            errorMsg: "Username is required",
            handleUsername: handleUsername,
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Kata Sandi</label>
        <AuthPasswordField
          props={{
            id: "password",
            name: "password",
            type: showPassword ? "text" : "password",
            placeholder: "Masukkan kata sandi",
            submitted: submitted,
            password: password,
            errorMsg: "Password is required",
            handleShowPassword: handleShowPassword,
            handlePassword: handlePassword,
          }}
        />
        <div className="form-links">
          <p>
            Sudah terdaftar? <NavLink to="/register">Daftar</NavLink>
          </p>
        </div>
      </div>

      <AuthAction textBtn={"Masuk"} />
    </form>
  );
}
