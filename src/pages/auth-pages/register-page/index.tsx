import { useRegister } from "@/feature/register-form/lib/use-register";
import { RegisterForm } from "@/feature/register-form/ui/register-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { form, onSubmit } = useRegister();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm form={form} onSubmit={onSubmit} />

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-white">
            Уже есть аккаунт?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Войти
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
