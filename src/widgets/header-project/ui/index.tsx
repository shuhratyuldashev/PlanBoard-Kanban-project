import UserCard from "@/entities/user-card";
import UserAvatar from "@/entities/user-dropdown/ui";
import { CreateProjectModal } from "@/feature/create-new-project-modal/ui";
import DeleteModal from "@/feature/delete-modal/ui";
import { ModeToggle } from "@/feature/mode-toggle.tsx";
import UsersModal from "@/feature/users-modal/ui";
import { usersData, type UserWithRoleType } from "@/shared/mock/user-data";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { EllipsisIcon, ExternalLink, Pen, Trash } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const sortedUsers = [...usersData].sort((a, b) => {
    if (a.online && !b.online) return -1;
    if (!a.online && b.online) return 1;
    return 0;
  });

  const MAX_VISIBLE = 6;
  const visibleUsers = sortedUsers.slice(0, MAX_VISIBLE);
  const hiddenCount = sortedUsers.length - MAX_VISIBLE;

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

        <div
          className="
            ml-4
            flex items-center -space-x-1
            *:data-[slot=avatar]:ring-2
            *:data-[slot=avatar]:ring-amber-300
            *:hover:data-[slot=avatar]:grayscale-0
            transition-all
          "
        >
          {visibleUsers.map((u: UserWithRoleType) => (
            <div
              key={u.id}
              className={`relative ${u.online ? "z-20" : "z-10"}`}
            >
              <UserCard
                avatar={u.avatar || ""}
                name={u.name}
                email={u.email}
                fallback={u.fallback}
                online={u.online}
              />
            </div>
          ))}

          {hiddenCount > 0 && (
            <div className="relative z-0">
              <div
                className="
                  h-9 w-9 rounded-full bg-muted
                  flex items-center justify-center
                  text-xs font-semibold
                  ring-2 ring-amber-300 ring-offset-2 ring-offset-background
                "
              >
                +{hiddenCount}
              </div>
            </div>
          )}
        </div>

        <Dialog>
          <DialogTrigger>
            <Button size="icon-sm" className="ml-2">
              <ExternalLink />
            </Button>
          </DialogTrigger>
          <UsersModal />
        </Dialog>
      </div>

      <div className="flex gap-2 items-center">
        <ModeToggle />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
