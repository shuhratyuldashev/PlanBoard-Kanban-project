import { Button } from "@/shared/ui/button";
import { Bot, MessageSquare, Settings, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { ChatWithBotModal } from "@/feature/chat-with-bot-modal/ui";

export default function AssistantFloatButton() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="fixed right-7 bottom-7 z-50">
        <AnimatePresence>
          <Button
          size="icon-lg"
          className="shadow-lg shadow-primary hover:scale-110 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {isOpen ? <X size={32} /> : <Bot size={32} />}
            </motion.div>
        </Button>
          {isOpen && 
          <motion.div 
            className="fixed right-7 flex flex-col-reverse bottom-18 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            exit={{ opacity: 0, y: 10 }}
            
            >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="shadow-lg shadow-primary" size="lg">
                  <MessageSquare/> Chat
                </Button>
              </DialogTrigger>
              <ChatWithBotModal />
            </Dialog>
            <Button className="shadow-lg shadow-primary" size="lg">
              <Settings /> Settings
            </Button>
          </motion.div>}
        </AnimatePresence>
    </div>
  );
}
