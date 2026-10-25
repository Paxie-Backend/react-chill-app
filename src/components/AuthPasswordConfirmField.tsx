import AuthFormLink from "./AuthFormLink";

interface IAuthPasswordConfirmFieldProps {
  handlePasswordConfirm?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitted: boolean;
  password: string;
  passwordConfirm?: string;
  navigateTo: string;
  linkDesc: string;
  linkText: string;
  isLoginPage: boolean;
}

export default function AuthPasswordConfirmField(props: Readonly<IAuthPasswordConfirmFieldProps>) {
  const {
    handlePasswordConfirm,
    submitted,
    password,
    passwordConfirm,
    navigateTo,
    linkDesc,
    linkText,
    isLoginPage,
  } = props;

  return (
    <div className="form-group">
      <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
      <input
        id="confirm-password"
        name="confirm-password"
        type="password"
        placeholder="Masukkan kata sandi"
        required={true}
        onChange={handlePasswordConfirm}
        value={passwordConfirm}
      />
      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !passwordConfirm ? "block" : "none",
        }}
      >
        Please confirm your password
      </span>
      <span
        className="body-small-regular error-label"
        style={{
          display:
            submitted && password.trim() && passwordConfirm?.trim() && password !== passwordConfirm
              ? "block"
              : "none",
        }}
      >
        Password do not match
      </span>
      <AuthFormLink
        linkDesc={linkDesc}
        linkText={linkText}
        navigateTo={navigateTo}
        isLoginPage={isLoginPage}
      />
    </div>
  );
}
