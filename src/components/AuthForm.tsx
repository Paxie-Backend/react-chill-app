import { useState, type SubmitEvent } from "react";

import type { AuthFormProps } from "../types/authform-props";
import AuthAction from "./AuthAction";
import AuthFormLink from "./AuthFormLink";
import AuthPasswordConfirmField from "./AuthPasswordConfirmField";
import AuthPasswordField from "./AuthPasswordField";
import AuthTextField from "./AuthTextField";

export default function AuthForm({
  mode,
  onSubmit,
  onErrorChange,
}: Readonly<AuthFormProps>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isRegister = mode === "register";
  const authLink = isRegister
    ? { linkDesc: "Sudah punya akun?", linkText: "Masuk", navigateTo: "/login" }
    : {
        linkDesc: "Belum punya akun?",
        linkText: "Daftar",
        navigateTo: "/register",
      };

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const hasMissingFields =
      !email.trim() ||
      !password.trim() ||
      (isRegister && !passwordConfirm.trim());
    const passwordsDoNotMatch =
      isRegister && password.trim() !== passwordConfirm.trim();

    if (hasMissingFields || passwordsDoNotMatch) {
      onErrorChange(false);
      return;
    }

    onErrorChange(!onSubmit(email, password));
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }

  return (
    <form
      className="flex w-full flex-col gap-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="relative flex flex-col gap-1">
        <label
          className="text-[10px] leading-[140%] font-medium tracking-[0.2px] text-white"
          htmlFor="username"
        >
          Email
        </label>
        <AuthTextField
          id="username"
          name="username"
          type="email"
          placeholder="Masukkan email"
          value={email}
          showError={submitted && !email.trim()}
          errorMsg="Email is required"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <label
          className="text-[10px] leading-[140%] font-medium tracking-[0.2px] text-white"
          htmlFor="password"
        >
          Kata Sandi
        </label>
        <AuthPasswordField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Masukkan kata sandi"
          required
          value={password}
          showError={submitted && !password.trim()}
          errorMsg="Password is required"
          onToggleVisibility={() => setShowPassword((visible) => !visible)}
          onChange={(event) => setPassword(event.target.value)}
        />
        {!isRegister && <AuthFormLink {...authLink} isLoginPage />}
      </div>

      {isRegister && (
        <>
          <div className="relative flex flex-col gap-1">
            <AuthPasswordConfirmField
              password={password}
              value={passwordConfirm}
              showError={submitted}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
            <AuthFormLink {...authLink} isLoginPage={false} />
          </div>
        </>
      )}

      <AuthAction textBtn={isRegister ? "Daftar" : "Masuk"} />
    </form>
  );
}
