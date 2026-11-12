import { useState } from "react";
import { useNavigate } from "react-router";

import AuthForm from "../components/AuthForm";
import AuthPageLayout from "../components/AuthPageLayout";
import { useAuth } from "../context/auth-context";

export default function LoginPage() {
  const [hasAuthError, setHasAuthError] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn(email: string, password: string) {
    const succeeded = signIn(email, password);

    if (succeeded) {
      navigate("/home");
    }

    return succeeded;
  }

  return (
    <AuthPageLayout
      variant="login"
      title="Masuk"
      greeting="Selamat datang kembali!"
      hasError={hasAuthError}
    >
      <AuthForm
        mode="login"
        onSubmit={handleSignIn}
        onErrorChange={setHasAuthError}
      />
    </AuthPageLayout>
  );
}
