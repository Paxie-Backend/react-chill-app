import AuthAction from "./AuthAction";
import AuthTextField from "./AuthTextField";
import AuthPasswordField from "./AuthPasswordField";
import AuthFormLink from "./AuthFormLink";
import AuthPasswordConfirmField from "./AuthPasswordConfirmField";

import type { AuthFormProps } from "../../types/authform-props";

export default function AuthForm(props: Readonly<AuthFormProps>) {
  const {
    handleFormSubmit,
    handleUsername,
    handlePassword,
    handleShowPassword,
    showPassword,
    linkDesc,
    linkText,
    textBtn,
    navigateTo,
    isRegisterPage,
    handlePasswordConfirm,
    passwordConfirm,
  } = props;

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <AuthTextField
          id="username"
          name="username"
          type="text"
          placeholder="Masukkan username"
          errorMsg="Username is required"
          onChange={handleUsername}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Kata Sandi</label>
        <AuthPasswordField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Masukkan kata sandi"
          required={true}
          errorMsg="Password is required"
          handleShowPassword={handleShowPassword}
          onChange={handlePassword}
        >
          {!isRegisterPage && (
            <AuthFormLink
              linkDesc={linkDesc}
              linkText={linkText}
              navigateTo={navigateTo}
              isLoginPage={!isRegisterPage}
            />
          )}
        </AuthPasswordField>
      </div>
      {isRegisterPage ? (
        <AuthPasswordConfirmField
          passwordConfirm={passwordConfirm}
          handlePasswordConfirm={handlePasswordConfirm}
          navigateTo={navigateTo}
          linkDesc={linkDesc}
          linkText={linkText}
          isLoginPage={!isRegisterPage}
        />
      ) : null}

      <AuthAction textBtn={textBtn} />
    </form>
  );
}
