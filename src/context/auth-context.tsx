import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { localAuth } from "../utils/local-auth";

interface AuthContextValue {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => boolean;
  signUp: (email: string, password: string) => boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localAuth.hasSession(),
  );

  const signIn = useCallback((email: string, password: string) => {
    try {
      if (!localAuth.read(email, password)) {
        return false;
      }

      localAuth.createSession();
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Failed to sign in:", error);
      return false;
    }
  }, []);

  const signUp = useCallback((email: string, password: string) => {
    try {
      return localAuth.create(email, password);
    } catch (error) {
      console.error("Failed to register user:", error);
      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    localAuth.deleteSession();
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, signIn, signUp, signOut }),
    [isAuthenticated, signIn, signOut, signUp],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
