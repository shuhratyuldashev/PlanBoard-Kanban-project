import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import type { RegisterFormValues } from "../lib/use-register";

interface RegisterFormProps {
  form: any; // useForm object
  onSubmit: (values: RegisterFormValues) => void;
}

export function RegisterForm({ form, onSubmit }: RegisterFormProps) {
  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label>Имя</Label>
              <FormControl>
                <Input
                  placeholder="Ваше имя"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>Пароль</Label>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>
    </Form>
  );
}
