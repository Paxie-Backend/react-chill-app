interface IAuthPasswordConfirmFieldProps {
  password: string;
  value: string;
  showError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthPasswordConfirmField({
  password,
  value,
  showError,
  onChange,
}: Readonly<IAuthPasswordConfirmFieldProps>) {
  const isMissing = showError && !value.trim();
  const doesNotMatch =
    showError && Boolean(value.trim()) && password.trim() !== value.trim();

  return (
    <>
      <label
        className="text-[10px] leading-[140%] font-medium tracking-[0.2px] text-white"
        htmlFor="confirm-password"
      >
        Konfirmasi Kata Sandi
      </label>
      <input
        className="block h-7 rounded-xl border-[0.58px] border-[hsla(250,81%,94%,0.23)] bg-transparent px-3 py-2 text-[10px] leading-[140%] tracking-[0.12px] text-white placeholder:text-[hsla(220,2%,76%,1)]"
        id="confirm-password"
        name="confirm-password"
        type="password"
        placeholder="Masukkan kata sandi"
        required
        onChange={onChange}
        value={value}
        aria-invalid={isMissing || doesNotMatch}
      />
      <span
        className={`text-xs leading-[140%] tracking-[0.2px] text-red-500 ${isMissing ? "block" : "hidden"}`}
      >
        Please confirm your password
      </span>
      <span
        className={`text-xs leading-[140%] tracking-[0.2px] text-red-500 ${doesNotMatch ? "block" : "hidden"}`}
      >
        Password do not match
      </span>
    </>
  );
}
