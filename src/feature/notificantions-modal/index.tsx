import {
  notificationsMock,
  type NotificationType,
} from "@/shared/mock/notifications";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { CheckIcon, InfoIcon, TriangleAlert, XIcon } from "lucide-react";

export default function NotificationsModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Уведомления</DialogTitle>
        <DialogDescription>Список всех ваших уведомлений</DialogDescription>
      </DialogHeader>

      <ScrollArea className="max-h-[400px]">
        <ItemGroup className="space-y-3">
          {notificationsMock.map((n: NotificationType) => (
            <Item variant="muted" key={n.id}>
              <ItemMedia>
                {n.type === "info" && <InfoIcon />}
                {n.type === "success" && <CheckIcon />}
                {n.type === "warning" && <TriangleAlert />}
                {n.type === "error" && <XIcon />}
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{n.title}</ItemTitle>
                <ItemDescription>{n.message}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </DialogContent>
  );
}
