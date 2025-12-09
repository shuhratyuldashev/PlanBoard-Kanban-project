import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileFormSchema,
  type ProfileFormValues,
} from "../model/profile-form-schema";

export const useUpdateProfileForm = (
  defaultValues?: Partial<ProfileFormValues>,
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    defaultValues?.avatar || "",
  );

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: defaultValues?.username || "",
      email: defaultValues?.email || "",
      avatar: defaultValues?.avatar || "",
      password: "",
    },
  });

  const handleAvatarChange = (url: string) => {
    form.setValue("avatar", url);
    setAvatarPreview(url);
  };

  const getUserInitials = (username: string) =>
    username
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return {
    form,
    isSubmitting,
    setIsSubmitting,
    avatarPreview,
    handleAvatarChange,
    getUserInitials,
  };
};
