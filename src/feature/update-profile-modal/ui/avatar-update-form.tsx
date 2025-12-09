import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Upload } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/shared/ui/form";

export const AvatarSection = ({
  form,
  avatarPreview,
  isSubmitting,
  handleAvatarChange,
  getUserInitials,
}: any) => (
  <div className="flex flex-col items-center gap-4">
    <Avatar className="h-24 w-24">
      <AvatarImage src={avatarPreview} alt="Profile" />
      <AvatarFallback className="text-lg">
        {getUserInitials(form.watch("username") || "User")}
      </AvatarFallback>
    </Avatar>

    <FormField
      control={form.control}
      name="avatar"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>URL аватарки</FormLabel>
          <FormControl>
            <div className="flex gap-2">
              <Input
                {...field}
                placeholder="https://example.com/avatar.jpg"
                disabled={isSubmitting}
                onChange={(e) => {
                  field.onChange(e);
                  handleAvatarChange(e.target.value);
                }}
              />

              <Button
                type="button"
                size="icon"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => {
                  const url = prompt("Введите URL аватарки:");
                  if (url) handleAvatarChange(url);
                }}
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </FormControl>
          <FormDescription>
            Введите ссылку на изображение профиля.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);
