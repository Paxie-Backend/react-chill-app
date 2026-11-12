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
    <div className="mt-[3px] flex justify-between">
      <p className="text-[10px] leading-[140%] tracking-[0.2px] text-[hsla(220,2%,76%,1)]">
        {linkDesc}{" "}
        <NavLink className="text-white no-underline" to={navigateTo}>
          {linkText}
        </NavLink>
      </p>
      {isLoginPage ? (
        <p className="text-[10px] leading-[140%] tracking-[0.2px] text-[hsla(220,2%,76%,1)]">
          <NavLink className="text-white no-underline" to="#">
            Lupa kata sandi?
          </NavLink>
        </p>
      ) : null}
    </div>
  );
}
