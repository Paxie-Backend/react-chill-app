interface IAuthPasswordFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  showError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleVisibility: () => void;
  errorMsg: string;
}

export default function AuthPasswordField(
  props: Readonly<IAuthPasswordFieldProps>,
) {
  const { onToggleVisibility, errorMsg, showError, ...inputProps } = props;

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
      <button
        type="button"
        aria-label="Toggle password visibility"
        aria-pressed={inputProps.type === "text"}
        onClick={onToggleVisibility}
        className="absolute top-[26px] right-3 cursor-pointer border-0 bg-transparent p-0"
      >
        <img
          src="../assets/images/eye-off.svg"
          alt="eye-off"
          className="h-3 w-3"
        />
      </button>
    </>
  );
}
