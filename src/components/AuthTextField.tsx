interface AuthTextFieldProps {
  submitted: boolean;
  errorMsg: string;
  value: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthTextField(props: Readonly<AuthTextFieldProps>) {
  const { submitted, errorMsg, ...resProps } = props;
  return (
    <>
      <input {...resProps} />

      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !resProps.value?.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
    </>
  );
}
