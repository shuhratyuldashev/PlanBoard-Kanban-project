import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { Palette, Eclipse } from "lucide-react";
import { SettingItem } from "./ui/settings-item";
import { ColorSchemeSelect } from "./ui/colour-schema-select";
import { Label } from "@/shared/ui/label";
import { ThemeSelect } from "./ui/theme-select";

const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Настройки</DialogTitle>
        <DialogDescription>
          Настройте внешний вид и поведение приложения
        </DialogDescription>
      </DialogHeader>

      <div className="mt-5 space-y-4">
        <Label>Внешний вид</Label>
        <SettingItem
          icon={
            <Button size="icon-lg">
              <Palette />
            </Button>
          }
          title="Цветовая схема проекта"
          description="Основной цвет акцентов в интерфейсе"
          action={<ColorSchemeSelect />}
        />

        <SettingItem
          icon={
            <Button size="icon-lg">
              <Eclipse />
            </Button>
          }
          title="Тема оформления"
          description="Выберите тему интерфейса приложения"
          action={<ThemeSelect />}
        />
      </div>

      <DialogFooter className="grid grid-cols-2">
        <Button onClick={onClose} variant="secondary">
          Отмена
        </Button>
        <Button>Сохранить</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default SettingsModal;
