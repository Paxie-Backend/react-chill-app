export interface AuthFormProps {
  handleFormSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword: () => void;
  username: string;
  password: string;
  showPassword: boolean;
  submitted: boolean;
  linkDesc: string;
  linkText: string;
  textBtn: string;
  navigateTo: string;
  isRegisterPage?: boolean;
  handlePasswordConfirm?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordConfirm?: string;
}
