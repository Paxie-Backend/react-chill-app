export default function AuthAction({ textBtn }: Readonly<{ textBtn: string }>) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        className="w-full cursor-pointer rounded-[14px] border-[0.58px] border-[hsla(250,81%,94%,0.23)] bg-[hsla(192,4%,25%,1)] py-2 text-[10px] leading-[140%] font-semibold tracking-[0.2px] text-white active:bg-[hsla(192,4%,30%,1)]"
        type="submit"
      >
        {textBtn}
      </button>
      <p className="text-[10px] font-medium text-[hsla(225,2%,62%,1)]">Atau</p>
      <button
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-[14px] border-[0.58px] border-[hsla(250,81%,94%,0.23)] bg-transparent py-2 text-[10px] leading-[140%] font-semibold tracking-[0.2px] text-white active:bg-[hsla(210,8%,15%,0.84)]"
        type="button"
      >
        <img
          className="h-[10px] w-[10px]"
          alt="google-logo"
          src="assets/images/google-logo.svg"
        />
        Masuk dengan Google
      </button>
    </div>
  );
}
