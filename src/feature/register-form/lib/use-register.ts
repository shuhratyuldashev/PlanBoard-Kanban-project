import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Введите имя" }),
  email: z.string().email({ message: "Введите корректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не меньше 6 символов" }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

export function useRegister() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    console.log("Register data:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Здесь можно вызвать API регистрации
  };

  return { form, onSubmit };
}
