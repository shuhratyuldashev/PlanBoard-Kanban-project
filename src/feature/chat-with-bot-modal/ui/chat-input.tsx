import { ArrowUp } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/shared/ui/input-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";

export function ChatInput({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <InputGroup className="items-end">
      <InputGroupTextarea
        placeholder="Напишите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="resize-none"
      />
      <InputGroupAddon align="block-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DropdownMenuLabel>BA v.1.0.0</DropdownMenuLabel>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Выбрать модель Ассистента</DropdownMenuLabel>
          <DropdownMenuItem>BA v.1.0.0</DropdownMenuItem>
          <DropdownMenuItem disabled>BA v.1.5.0</DropdownMenuItem>
          <DropdownMenuItem disabled>BA v.1.5.5</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        <InputGroupButton variant="default" size="icon-sm" className="ml-auto rounded-full" disabled={!value.trim()}>
          <ArrowUp size={16} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
