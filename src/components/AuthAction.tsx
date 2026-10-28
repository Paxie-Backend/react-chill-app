import "../styles/authentication.css";
import "../styles/main.css";

export default function AuthAction({ textBtn }: Readonly<{ textBtn: string }>) {
  return (
    <div className="auth-action">
      <button type="submit">{textBtn}</button>
      <p>Atau</p>
      <button type="button">
        <img alt="google-logo" src="assets/images/google-logo.svg" />Masuk dengan Google
      </button>
    </div>
  );
}
