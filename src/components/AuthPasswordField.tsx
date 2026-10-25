import type { ReactNode } from "react";

interface IAuthPasswordFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleShowPassword: () => void;
  submitted: boolean;
  errorMsg: string;
  children: ReactNode;
}

export default function AuthPasswordField({
  children,
  ...props
}: Readonly<IAuthPasswordFieldProps>) {
  const { handleShowPassword, submitted, errorMsg, ...resProps } = props;
  return (
    <>
      <input {...resProps} />
      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !resProps.value.trim() ? "block" : "none",
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
