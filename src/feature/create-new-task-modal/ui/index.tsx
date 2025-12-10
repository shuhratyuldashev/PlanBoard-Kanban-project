import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";

interface CreateTaskModalProps {
  variant: "new" | "edit";
  onClose?: () => void;
}

interface ImportanceLevelType {
  key: "low" | "medium" | "high";
  label: string;
  activeClass: string;
}

export function CreateTaskModal({ variant, onClose }: CreateTaskModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [visibility, setVisibility] = useState<"private" | "public">("private");
  const [loading, setLoading] = useState<boolean>(false);
  const [importance, setImportance] = useState<"low" | "medium" | "high">(
    "low",
  );

  const levels: ImportanceLevelType[] = [
    {
      key: "low",
      label: "Низкий",
      activeClass: "bg-green-500/75 border-green-600 text-white",
    },
    {
      key: "medium",
      label: "Средний",
      activeClass: "bg-yellow-500/75 border-yellow-600 text-white",
    },
    {
      key: "high",
      label: "Высокий",
      activeClass: "bg-red-500/75 border-red-600 text-white",
    },
  ];

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
          {variant === "new" ? "Новая задача" : "Редактировать задачу"}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Название задачи</Label>
          <Input
            placeholder="Введите имя задачи"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label>Описание задачи</Label>
          <Textarea
            placeholder="Введите описание задачи"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4 w-full">
            {levels.map(({ key, label, activeClass }) => (
              <div
                key={key}
                onClick={() => setImportance(key)}
                className={[
                  "flex items-center justify-center py-2.5 rounded-md border cursor-pointer transition-all",
                  importance === key ? activeClass : "bg-secondary",
                ].join(" ")}
              >
                {label}
              </div>
            ))}
          </div>
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
