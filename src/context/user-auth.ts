import { createContext, useContext } from "react";

interface IUsernameContext {
  username: string;
  setUsername: (username: string) => void;
}

interface IPasswordContext {
  password: string;
  setPassword: (username: string) => void;
}

export const UsernameContext = createContext<IUsernameContext | undefined>(undefined);
export const PasswordContext = createContext<IPasswordContext | undefined>(undefined);
export const SubmittedContext = createContext<boolean | undefined>(undefined);

export function useUsernameContext() {
  const context = useContext(UsernameContext);

  if (context === undefined) {
    throw new Error("useUsernameContext must be used within a UsernameProvider");
  }

  return context;
}

export function useSubmittedContext() {
  const context = useContext(SubmittedContext);

  if (context === undefined) {
    throw new Error("useSubmittedContext must be used within a SubmittedProvider");
  }

  return context;
}

export function usePasswordContext() {
  const context = useContext(PasswordContext);

  if (context === undefined) {
    throw new Error("usePasswordContext must be used within a SubmittedProvider");
  }

  return context;
}
