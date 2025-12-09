import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не меньше 6 символов" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function useLogin() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log("Login data:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Здесь можно вызвать API login
  };

  return { form, onSubmit };
}
