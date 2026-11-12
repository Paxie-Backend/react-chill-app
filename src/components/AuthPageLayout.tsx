import type { ReactNode } from "react";

import AuthHeader from "./AuthHeader";

interface AuthPageLayoutProps {
  variant: "login" | "register";
  title: string;
  greeting: string;
  hasError: boolean;
  children: ReactNode;
}

export default function AuthPageLayout({
  variant,
  title,
  greeting,
  hasError,
  children,
}: Readonly<AuthPageLayoutProps>) {
  const backgroundImage =
    variant === "login"
      ? "bg-[url('/assets/images/bg-image.jpg')]"
      : "bg-[url('/assets/images/bg-desktop-daftar.jpg')]";

  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat ${backgroundImage}`}
    >
      <main className="flex w-full min-w-[306px] max-w-[529px] flex-col items-center justify-center gap-5 rounded-lg bg-[hsla(210,8%,10%,0.84)] p-6 max-[560px]:mx-[27px]">
        <AuthHeader title={title} greeting={greeting} isError={hasError} />
        {children}
      </main>
    </div>
  );
}
