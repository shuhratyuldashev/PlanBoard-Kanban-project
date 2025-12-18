import { mockMessages, type Message } from "@/shared/mock/messages";
import { useEffect, useRef, useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return {
    messages,
    value,
    setValue,
    setMessages,
    scrollRef,
  };
}
