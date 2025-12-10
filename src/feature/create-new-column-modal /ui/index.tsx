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

interface CreateProjectModalProps {
  variant: "new" | "edit";
  onClose?: () => void;
}

const colors = [
  {
    className: "bg-primary",
    label: "Акцентный",
    value: "accent",
    isFree: true,
  },
  {
    className: "bg-secondary",
    label: "Вторичный",
    value: "secondary",
    isFree: true,
  },
  {
    className: "bg-amber-400",
    label: "Золотой",
    value: "golden",
    isFree: false,
  },
];

export function CreateColumntModal({
  variant,
  onClose,
}: CreateProjectModalProps) {
  const [name, setName] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("secondary"); // по умолчанию secondary
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreate = async () => {
    if (!name.trim()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));

    console.log({ name, selectedColor });

    setLoading(false);
    setName("");
    setSelectedColor("secondary");

    if (onClose) onClose();
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
          <Label>Название Колонки</Label>
          <Input
            placeholder="Введите имя проекта"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label>Цвет Колонки</Label>
          <Select
            value={selectedColor}
            onValueChange={(value) => setSelectedColor(value)}
            disabled={loading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите цвет" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((c) => (
                <SelectItem
                  disabled={!c.isFree}
                  key={c.value}
                  value={c.value}
                  className={c.isFree ? "" : "bg-secondary"}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-4 w-4 rounded-full ${c.className}`} />
                    {c.label}
                  </div>
                </SelectItem>
              ))}
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
