interface AuthTextFieldProps {
  errorMsg: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  showError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthTextField({
  errorMsg,
  showError,
  ...inputProps
}: Readonly<AuthTextFieldProps>) {
  return (
    <>
      <input
        className="block h-7 rounded-xl border-[0.58px] border-[hsla(250,81%,94%,0.23)] bg-transparent px-3 py-2 text-[10px] leading-[140%] tracking-[0.12px] text-white placeholder:text-[hsla(220,2%,76%,1)]"
        {...inputProps}
        aria-invalid={showError}
      />
      <span
        className={`text-xs leading-[140%] tracking-[0.2px] text-red-500 ${showError ? "block" : "hidden"}`}
      >
        {errorMsg}
      </span>
    </>
  );
}
