import { Input } from "@/shared/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/shared/ui/form";

export const UserFields = ({ form, isSubmitting }: any) => (
  <>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Имя пользователя</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="Введите имя пользователя"
              disabled={isSubmitting}
            />
          </FormControl>
          <FormDescription>Это ваше публичное имя.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Электронная почта</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="email"
              placeholder="ваш.email@example.com"
              disabled={isSubmitting}
            />
          </FormControl>
          <FormDescription>Ваш email для уведомлений аккаунта.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Пароль</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="password"
              placeholder="Оставьте пустым, чтобы не менять пароль"
              disabled={isSubmitting}
            />
          </FormControl>
          <FormDescription>
            Заполните это поле, если хотите изменить пароль.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
