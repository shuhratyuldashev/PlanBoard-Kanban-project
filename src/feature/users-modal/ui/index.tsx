import { usersData, type UserWithRoleType } from "@/shared/mock/user-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/shared/ui/select";
import { UserRoundX } from "lucide-react";

export default function UsersModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Список всех пользователей</DialogTitle>
        <DialogDescription>
          Список всех пользователей работающих над проектом
        </DialogDescription>
      </DialogHeader>

      <ScrollArea className="h-[400px]">
        <div className="space-y-2 pr-2">
          {usersData.map((u: UserWithRoleType) => (
            <Item key={u.id} variant="muted">
              <ItemMedia>
                <Avatar
                  className={
                    u.online
                      ? "ring-2 ring-green-500 ring-offset-1 ring-offset-white"
                      : ""
                  }
                >
                  <AvatarImage src={u.avatar} />
                  <AvatarFallback className="bg-primary">
                    {u.fallback}
                  </AvatarFallback>
                </Avatar>
              </ItemMedia>

              <ItemContent>
                <ItemTitle>{u.name}</ItemTitle>
                <ItemDescription>{u.email}</ItemDescription>
              </ItemContent>

              <ItemActions>
                <Select value={u.role}>
                  <SelectTrigger className="bg-white">
                    {u.role === "viewer" && "Viewer"}
                    {u.role === "editor" && "Editor"}
                    {u.role === "owner" && "Owner"}
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Выбор роли</SelectLabel>

                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="owner">Owner</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <UserRoundX />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </div>

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </DialogContent>
  );
}
