import { LoginForm } from "@/feature/login-form/ui/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Link } from "react-router-dom";
import { useLogin } from "@/feature/login-form/lib/use-login";

export default function LoginPage() {
  const { form, onSubmit } = useLogin();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Вход в систему</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm form={form} onSubmit={onSubmit} />

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-white">
            Нет аккаунта?{" "}
            <Link to="/auth/register" className="text-blue-500 hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
