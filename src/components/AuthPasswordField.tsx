import type { ReactNode } from "react";
import { usePasswordContext, useSubmittedContext } from "../context/user-auth";

interface IAuthPasswordFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword: () => void;
  errorMsg: string;
  children: ReactNode;
}

export default function AuthPasswordField({
  children,
  ...props
}: Readonly<IAuthPasswordFieldProps>) {
  const { handleShowPassword, errorMsg, ...resProps } = props;
  const submitted = useSubmittedContext();
  const { password } = usePasswordContext();

  return (
    <>
      <input {...resProps} value={password} />
      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !password.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
      <img
        src="../assets/images/eye-off.svg"
        alt="eye-off"
        className="form-group__icon"
        onClick={handleShowPassword}
      />
      {children}
    </>
  );
}
