import { useTheme } from "@/app/providers/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

const colors = [
  { value: "blue", label: "Синий", className: "bg-blue-500 text-white" },
  { value: "green", label: "Зелёный", className: "bg-green-500 text-white" },
  {
    value: "purple",
    label: "Пурпурный",
    className: "bg-purple-500 text-white",
  },
  { value: "pink", label: "Розовый", className: "bg-pink-500 text-white" },
  {
    value: "orange",
    label: "Оранжевый",
    className: "bg-orange-500 text-white",
  },
  { value: "yellow", label: "Жёлтый", className: "bg-yellow-400 text-black" }
];

export const ColorSchemeSelect = () => {
  const { palette, setPalette } = useTheme();

  return (
    <Select value={palette} onValueChange={(val) => setPalette(val as any)}>
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="Выберите цвет" />
      </SelectTrigger>

      <SelectContent>
        {colors.map((color) => (
          <SelectItem key={color.value} value={color.value}>
            <div className="flex items-center gap-2">
              <div className={`h-4 w-4 rounded-full ${color.className}`} />
              {color.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
