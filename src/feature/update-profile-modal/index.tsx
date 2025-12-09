import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Loader2 } from "lucide-react";
import { Form } from "@/shared/ui/form";
import { useUpdateProfileForm } from "./lib/use-update-profile-form";
import { AvatarSection } from "./ui/avatar-update-form";
import { UserFields } from "./ui/user-field";
import type { ProfileFormValues } from "./model/profile-form-schema";

interface UpdateProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultValues?: Partial<ProfileFormValues>;
  // onSubmit: (data: ProfileFormValues) => Promise<void>;
  onSubmit: any;
}

export const UpdateProfileModal = ({
  open,
  onOpenChange,
  defaultValues,
  onSubmit,
}: UpdateProfileModalProps) => {
  const {
    form,
    isSubmitting,
    setIsSubmitting,
    avatarPreview,
    handleAvatarChange,
    getUserInitials,
  } = useUpdateProfileForm(defaultValues);

  const handleSubmit = async (data: ProfileFormValues) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      onOpenChange(false);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Редактирование профиля</DialogTitle>
          <DialogDescription>
            Внесите изменения в свой профиль. Нажмите «Сохранить», когда будете
            готовы.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <AvatarSection
              form={form}
              avatarPreview={avatarPreview}
              isSubmitting={isSubmitting}
              handleAvatarChange={handleAvatarChange}
              getUserInitials={getUserInitials}
            />

            <UserFields form={form} isSubmitting={isSubmitting} />

            <DialogFooter className="grid grid-cols-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Отмена
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isSubmitting ? "Сохранение..." : "Сохранить изменения"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
