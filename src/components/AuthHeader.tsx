import AuthError from "./AuthError";

interface IAuthHeaderProps {
  title: string;
  greeting: string;
  isError: boolean;
}

export default function AuthHeader({
  title,
  greeting,
  isError,
}: IAuthHeaderProps) {
  return (
    <>
      <img
        className="w-[94px]"
        src="assets/images/chill-app-logo.svg"
        alt="chill-app-logo"
      />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-[18px] leading-[140%] font-bold tracking-[0.2px] text-white">
          {title}
        </h1>
        <p className="text-[10px] leading-[140%] tracking-[0.2px] text-white">
          {greeting}
        </p>
        <AuthError isError={isError} />
      </div>
    </>
  );
}
