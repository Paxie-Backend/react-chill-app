import { useState } from "react";
import { useNavigate } from "react-router";

import AuthForm from "../components/AuthForm";
import AuthPageLayout from "../components/AuthPageLayout";
import { useAuth } from "../context/auth-context";

export default function RegisterPage() {
  const [hasAuthError, setHasAuthError] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  function handleSignUp(email: string, password: string) {
    const succeeded = signUp(email, password);

    if (succeeded) {
      navigate("/login");
    }

    return succeeded;
  }

  return (
    <AuthPageLayout
      variant="register"
      title="Daftar"
      greeting="Selamat datang!"
      hasError={hasAuthError}
    >
      <AuthForm
        mode="register"
        onSubmit={handleSignUp}
        onErrorChange={setHasAuthError}
      />
    </AuthPageLayout>
  );
}
