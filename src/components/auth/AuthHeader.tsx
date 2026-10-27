import "../../styles/authentication.css";
import "../../styles/main.css";

import AuthError from "./AuthError";

interface IAuthHeaderProps {
  title: string;
  greeting: string;
  isError: boolean;
}

export default function AuthHeader({ title, greeting, isError }: IAuthHeaderProps) {
  return (
    <>
      <img className="logo" src="assets/images/chill-app-logo.svg" alt="chill-app-logo" />
      <div className="welcome">
        <h1>{title}</h1>
        <p>{greeting}</p>
        <AuthError isError={isError} />
      </div>
    </>
  );
}
