import AuthFormLink from "./AuthFormLink";

export default function AuthPasswordConfirmField({ props }) {
  const {
    handlePasswordConfirm,
    submitted,
    password,
    passwordConfirm,
    navigateTo,
    linkDesc,
    linkText,
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
            submitted &&
            password.trim() &&
            passwordConfirm.trim() &&
            password !== passwordConfirm
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
      />
    </div>
  );
}
