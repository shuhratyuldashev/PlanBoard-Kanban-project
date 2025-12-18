import { Bot, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { formatTime } from "../lib/date";
import type { Message } from "@/shared/mock/messages";

export function ChatMessageItem({ msg }: { msg: Message }) {
  return (
    <div
      className={`flex w-full items-end gap-2 ${
        msg.role === "user" ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar className="h-8 w-8 border shrink-0">
        <AvatarFallback
          className={msg.role === "bot" ? "bg-primary text-white border-none" : "bg-secondary"}
        >
          {msg.role === "bot" ? <Bot size={16} /> : <User size={16} />}
        </AvatarFallback>
      </Avatar>

      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
          msg.role === "user"
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-background border rounded-bl-none"
        }`}
      >
        {msg.text}
        <span className="block text-[10px] mt-1 opacity-70 text-right">
          {formatTime(msg.timestamp)}
        </span>
      </div>
    </div>
  );
}
