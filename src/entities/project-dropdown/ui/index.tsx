import { DropdownMenuLabel, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/shared/ui/dropdown-menu";
import { Pen, Trash } from "lucide-react";

export default function ProjectDropdown({
    setIsEditOpen,
    setIsDeleteOpen
}: {
    setIsEditOpen: (open: boolean) => void;
    setIsDeleteOpen: (open: boolean) => void;
}) {
    return (
        <DropdownMenuContent>
            <DropdownMenuLabel>Проект</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onSelect={() => setIsEditOpen(true)}>
              <Pen className="mr-2 h-4 w-4" />
              Редактировать
            </DropdownMenuItem>

            <DropdownMenuItem
              variant="destructive"
              onSelect={() => setIsDeleteOpen(true)}
            >
              <Trash className="mr-2 h-4 w-4 text-destructive" />
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
    )
}