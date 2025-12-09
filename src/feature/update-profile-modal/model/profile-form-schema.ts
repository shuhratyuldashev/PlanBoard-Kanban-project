import * as z from "zod";

export const profileFormSchema = z.object({
  username: z
    .string()
    .min(3, "Имя пользователя должно быть не менее 3 символов")
    .max(20, "Имя пользователя не должно превышать 20 символов")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Имя пользователя может содержать только буквы, цифры и подчеркивания",
    ),
  email: z.string().email("Введите корректный адрес электронной почты"),
  avatar: z.string().url("Введите корректный URL").optional().or(z.literal("")),
  password: z
    .string()
    .min(8, "Пароль должен быть не менее 8 символов")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .optional()
    .or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
