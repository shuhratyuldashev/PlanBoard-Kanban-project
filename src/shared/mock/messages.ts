export type Message = {
  id: number;
  text: string;
  role: "user" | "bot";
  timestamp: Date;
};



export const mockMessages: Message[] = [
  {
    id: 1,
    text: "Привет! Я AI ассистент. Чем могу помочь?",
    role: "bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // вчера
  },
  {
    id: 2,
    text: "Привет! Хочу понять, как работает этот чат.",
    role: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 + 1000 * 60 * 5),
  },
  {
    id: 3,
    text: "Всё просто: вы пишете сообщение, а я отвечаю 🙂",
    role: "bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 + 1000 * 60 * 8),
  },
  {
    id: 4,
    text: "Круто! А можно потом подключить настоящий AI?",
    role: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // сегодня
  },
  {
    id: 5,
    text: "Да, этот интерфейс уже готов к подключению API или сокетов.",
    role: "bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 9),
  },
  {
    id: 6,
    text: "Отлично, спасибо!",
    role: "user",
    timestamp: new Date(), // сейчас
  },
];