export type NotificationType = {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  createdAt: string; 
  read: boolean;
  userId?: string; 
};


export const notificationsMock: NotificationType[] = [
  {
    id: "1",
    title: "Новый пользователь",
    message: "К аккаунту присоединился новый пользователь: Aziz Umarov",
    type: "info",
    createdAt: "2025-12-10T14:22:00Z",
    read: false,
  },
  {
    id: "2",
    title: "Успешный платеж",
    message: "Платеж от пользователя Dilshod был успешно обработан.",
    type: "success",
    createdAt: "2025-12-10T12:10:00Z",
    read: true,
  },
  {
    id: "3",
    title: "Просроченная задача",
    message: "У ученика Diyor появилась задача, которая просрочена.",
    type: "warning",
    createdAt: "2025-12-09T18:45:00Z",
    read: false,
  },
  {
    id: "4",
    title: "Ошибка авторизации",
    message: "Неудачная попытка входа в админ-панель.",
    type: "error",
    createdAt: "2025-12-09T11:20:00Z",
    read: false,
  },
  {
    id: "5",
    title: "Домашнее задание проверено",
    message: "Учитель проверил новую работу от ученика Malika.",
    type: "success",
    createdAt: "2025-12-08T08:32:00Z",
    read: true,
  },
  {
    id: "6",
    title: "Новое сообщение",
    message: "Поступило новое сообщение от родителя.",
    type: "info",
    createdAt: "2025-12-07T19:28:00Z",
    read: false,
  },
];
