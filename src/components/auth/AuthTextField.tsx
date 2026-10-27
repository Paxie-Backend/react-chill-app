import { useSubmittedContext, useUsernameContext } from "../../context/user-auth";

interface AuthTextFieldProps {
  errorMsg: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthTextField(props: Readonly<AuthTextFieldProps>) {
  const { errorMsg, ...resProps } = props;
  const {username} = useUsernameContext();
  const submitted = useSubmittedContext();

  return (
    <>
      <input {...resProps} value={username} />

      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !username?.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
    </>
  );
}
