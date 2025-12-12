import {
  notificationsMock,
  type NotificationType,
} from "@/shared/mock/notifications";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
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
        <div className="space-y-3">
          {notificationsMock.map((n: NotificationType) => (
            <Alert variant={n.type === "info" ? "default" : n.type === "success" ? "success" : n.type === "warning" ? "warning" : "destructive"} key={n.id}>
              {n.type === "info" && <InfoIcon />}
              {n.type === "success" && <CheckIcon />}
              {n.type === "warning" && <TriangleAlert />}
              {n.type === "error" && <XIcon />}
              <AlertTitle>{n.title}</AlertTitle>
              <AlertDescription>{n.message}</AlertDescription>
            </Alert>
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </DialogContent>
  );
}
