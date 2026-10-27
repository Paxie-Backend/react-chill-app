import { NavLink } from "react-router";

interface IAuthFormLinkProps {
  linkDesc: string;
  navigateTo: string;
  linkText: string;
  isLoginPage: boolean;
}

export default function AuthFormLink(props: Readonly<IAuthFormLinkProps>) {
  const { linkDesc, navigateTo, linkText, isLoginPage } = props;

  return (
    <div className="form-links">
      <p>
        {linkDesc} <NavLink to={navigateTo}>{linkText}</NavLink>
      </p>
      {isLoginPage ? (
        <p>
          <NavLink to="#">Lupa kata sandi?</NavLink>
        </p>
      ) : null}
    </div>
  );
}
