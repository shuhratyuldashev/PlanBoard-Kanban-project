import LogOutModal from "@/feature/log-out-modal/ui";
import NotificationsModal from "@/feature/notificantions-modal";
import SettingsModal from "@/feature/settings-modal";
import { UpdateProfileModal } from "@/feature/update-profile-modal";
import { userData } from "@/shared/mock/user-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Dialog } from "@/shared/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { LogOut, Mail, Settings, UserRoundPen } from "lucide-react";
import { useState } from "react";

const UserAvatar = () => {
  const [isLogOutOpen, setIsLogOutOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] =
    useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback>{userData.fallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="flex items-center flex-col p-2">
            <Avatar className="border w-10 h-10">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.fallback}</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold text-md text-primary">
              {userData.name}
            </h1>
            <p className="text-sm text-muted-foreground">{userData.email}</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Пользователь</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsNotificationsOpen(true)}>
            <Mail />
            Увдомления
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Настройки</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsProfileOpen(true)}>
            <UserRoundPen />
            Профиль
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsSettingsOpen(true)}>
            <Settings />
            Настройки
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setIsLogOutOpen(true)}
          >
            <LogOut className="text-destructive" />
            Выйти
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={isLogOutOpen} onOpenChange={setIsLogOutOpen}>
        <LogOutModal onClose={() => setIsLogOutOpen(false)} />
      </Dialog>
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SettingsModal onClose={() => setIsSettingsOpen(false)} />
      </Dialog>
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <UpdateProfileModal
          open={isProfileOpen}
          onOpenChange={setIsProfileOpen}
          onSubmit={() => {
            console.log("HELLO WORLD");
          }}
          defaultValues={{}}
        />
      </Dialog>
      <Dialog open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
        <NotificationsModal />
      </Dialog>
    </>
  );
};

export default UserAvatar;
