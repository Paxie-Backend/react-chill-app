export interface AuthFormProps {
  mode: "login" | "register";
  onSubmit: (email: string, password: string) => boolean;
  onErrorChange: (hasError: boolean) => void;
}
