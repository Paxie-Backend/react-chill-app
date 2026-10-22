import { NavLink } from "react-router";

export default function AuthFormLink(props) {
  const { linkDesc, navigateTo, linkText, isLoginPage } = props;

  return (
    <div className="form-links">
      <p>
        {linkDesc} <NavLink to={navigateTo}>{linkText}</NavLink>
      </p>
      {isLoginPage && (
        <p>
          <NavLink>Lupa kata sandi?</NavLink>
        </p>
      )}
    </div>
  );
}
