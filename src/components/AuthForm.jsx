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
          id="username"
          name="username"
          type="text"
          placeholder="Masukkan username"
          submitted={submitted}
          value={username}
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
          submitted={submitted}
          value={password}
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
          password={password}
          passwordConfirm={passwordConfirm}
          submitted={submitted}
          handlePasswordConfirm={handlePasswordConfirm}
          navigateTo={navigateTo}
          linkDesc={linkDesc}
          linkText={linkText}
        />
      ) : null}

      <AuthAction textBtn={textBtn} />
    </form>
  );
}
