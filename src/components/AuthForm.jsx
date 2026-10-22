import AuthAction from "../components/AuthAction";
import AuthTextField from "./AuthTextField";
import AuthPasswordField from "./AuthPasswordField";
import AuthFormLink from "./AuthFormLink";
import AuthPasswordConfirmField from "../components/AuthPasswordConfirmField";

export default function AuthForm(props) {
  const {
    handleFormSubmit,
    handleUsername,
    handlePassword,
    handleShowPassword,
    username,
    password,
    showPassword,
    submitted,
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
            isLoginPage: !isRegisterPage,
          }}
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
      {isRegisterPage && (
        <AuthPasswordConfirmField
          props={{
            password: password,
            passwordConfirm: passwordConfirm,
            submitted: submitted,
            handlePasswordConfirm,
            navigateTo: navigateTo,
            linkDesc: linkDesc,
            linkText: linkText,
          }}
        />
      )}

      <AuthAction textBtn={textBtn} />
    </form>
  );
}
