import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Globe, Lock } from "lucide-react";

interface CreateProjectModalProps {
  variant: "new" | "edit";
  onClose?: () => void;
}

export function CreateProjectModal({
  variant,
  onClose,
}: CreateProjectModalProps) {
  const [name, setName] = useState<string>("");
  const [visibility, setVisibility] = useState<"private" | "public">("private"); // private | public
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreate = async () => {
    if (!name.trim()) return;

    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    console.log({ name, visibility });

    setLoading(false);

    setName("");
    setVisibility("private");

    if (onClose) {
      onClose();
    }
  };

  return (
    <DialogContent className="max-w-sm">
      <DialogHeader>
        <DialogTitle>
          {variant === "new" ? "Новый проект" : "Редактировать проект"}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Название проекта</Label>
          <Input
            placeholder="Введите имя проекта"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label>Тип проекта</Label>
          <Select
            value={visibility}
            onValueChange={(value) =>
              setVisibility(value as "private" | "public")
            }
            disabled={loading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">
                <Lock />
                Приватный
              </SelectItem>
              <SelectItem value="public">
                <Globe />
                Публичный
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" disabled={loading} onClick={handleCreate}>
          {variant === "new"
            ? loading
              ? "Создание..."
              : "Создать"
            : loading
              ? "Сохранение..."
              : "Сохранить"}
        </Button>
      </div>
    </DialogContent>
  );
}
