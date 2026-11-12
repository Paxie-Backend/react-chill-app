export default function AuthError({ isError }: Readonly<{ isError: boolean }>) {
  return (
    <span
      className={`text-xs leading-[140%] tracking-[0.2px] text-red-500 ${isError ? "block" : "hidden"}`}
    >
      Invalid username/password
    </span>
  );
}
