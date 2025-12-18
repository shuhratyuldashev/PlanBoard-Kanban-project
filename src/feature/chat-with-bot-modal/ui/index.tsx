import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { useChat } from "../lib/useChat";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";


export function ChatWithBotModal() {
  const { messages, value, setValue, scrollRef } = useChat();

  return (
    <SheetContent className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>AI Ассистент</SheetTitle>
        <SheetDescription>Задайте вопрос</SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-hidden">
        <ChatMessages messages={messages} scrollRef={scrollRef} />
      </div>

      <div className="border-t p-4">
        <ChatInput value={value} setValue={setValue} />
      </div>
    </SheetContent>
  );
}
