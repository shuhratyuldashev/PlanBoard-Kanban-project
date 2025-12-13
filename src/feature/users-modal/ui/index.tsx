import { usersData, type UserWithRoleType } from "@/shared/mock/user-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
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
import { Search, UserRoundX } from "lucide-react";

export default function UsersModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Список всех участников</DialogTitle>
        <DialogDescription>
          Список всех участников проекта
        </DialogDescription>
      </DialogHeader>

      <div className="flex gap-2">
        <Button variant="outline" size="icon-lg"><Search /></Button>
        <Input placeholder="Поиск участников..."/>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Item variant="muted">
          <ItemContent>
            <ItemTitle className="text-xs">Количество участников в сети</ItemTitle>
            <h1 className="text-2xl font-bold">{usersData.length}</h1>
          </ItemContent>
        </Item>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle className="text-xs">Количество всех участников</ItemTitle>
            <h1 className="text-2xl font-bold">{usersData.length}</h1>
          </ItemContent>
        </Item>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="space-y-2 pr-2">
          {usersData.map((u: UserWithRoleType) => (
            <Item className={u.online ? "bg-primary text-white" : ""} key={u.id} variant="muted">
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
                <ItemTitle className="font-semibold">{u.name}</ItemTitle>
                <ItemDescription className={u.online ? "text-white" : ""}>{u.email}</ItemDescription>
              </ItemContent>

              <ItemActions className="text-secondary-foreground">
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
