import UserAvatar from "@/entities/user-dropdown/ui";
import { CreateProjectModal } from "@/feature/create-new-project-modal/ui";
import DeleteModal from "@/feature/delete-modal/ui";
import { ModeToggle } from "@/feature/mode-toggle.tsx";
import { Button } from "@/shared/ui/button";
import { Dialog } from "@/shared/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { EllipsisIcon, Pen, Trash } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  return (
    <header className="w-full flex justify-between shadow-lg shadow-secondary z-50 items-center rounded-lg py-2 px-4 bg-secondary">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">Project Name 1</h1>

        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <CreateProjectModal
            variant="edit"
            onClose={() => setIsEditOpen(false)}
          />
        </Dialog>

        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DeleteModal
            variant="delete"
            onClose={() => setIsDeleteOpen(false)}
          />
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" size="icon">
              <EllipsisIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Мой Проект</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onSelect={() => setIsEditOpen(true)}>
              <Pen className="mr-2 h-4 w-4" />
              Редактировать
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={() => setIsDeleteOpen(true)}
              className="text-destructive focus:text-destructive"
            >
              <Trash className="mr-2 h-4 w-4 text-destructive" />
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-2 items-center">
        <ModeToggle />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
