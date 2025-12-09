import { useTheme } from "@/app/providers/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const ThemeSelect = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (val: string) => void;
}) => {
  const { setTheme, theme } = useTheme();

  const handleChange = (val: any) => {
    setTheme(val);
    onChange?.(val);
  };

  return (
    <Select value={value ?? theme} onValueChange={handleChange}>
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="Выберите тему" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="light">Светлая</SelectItem>
        <SelectItem value="dark">Тёмная</SelectItem>
        <SelectItem value="system">Системная</SelectItem>
      </SelectContent>
    </Select>
  );
};
