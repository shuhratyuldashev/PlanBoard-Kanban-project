import { ScrollArea } from "@/shared/ui/scroll-area";
import type { Message } from "@/shared/mock/messages";
import { formatDateLabel } from "../lib/date";
import { ChatMessageItem } from "./chat-message-item";

export function ChatMessages({
  messages,
  scrollRef,
}: {
  messages: Message[];
  scrollRef: any;
}) {

  
  return (
    <ScrollArea className="bg-[url(https://i.pinimg.com/736x/a4/70/ec/a470ec007e3c19660f1776cdc1d4a1c8.jpg)] dark:bg-[url(https://i.pinimg.com/736x/b4/07/e9/b407e98ec24ab6d8d47e8a3d0f0e78bb.jpg)] bg-cover bg-center h-full p-4">
      <div className="flex flex-col gap-4">
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const showDate =
            !prev ||
            msg.timestamp.toDateString() !== prev.timestamp.toDateString();
          const isToday =
            msg.timestamp.toDateString() === new Date().toDateString();

          return (
            <div key={msg.id} className="flex flex-col gap-4">
              {showDate && 
              
              (
               <div
                className={`mx-auto w-fit px-2 py-0.5 rounded-full text-xs ${
                  isToday
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {formatDateLabel(msg.timestamp)}
              </div>
              )}
              <ChatMessageItem msg={msg} />
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>
    </ScrollArea>
  );
}
