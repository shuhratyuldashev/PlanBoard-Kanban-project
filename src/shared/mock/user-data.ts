
export interface UserType {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  fallback: string;
}

export interface UserWithRoleType extends UserType {
  role: "owner" | "editor" | "viewer";
  online: boolean;
}

export const userData: UserType = {
  id: "1",
  name: "Abbas Xamidov",
  email: "abbas.xamidov@example.com",
  password: "password123",
  avatar: "/avatar.jpg",
  fallback: "AX",
};

export const usersData: UserWithRoleType[] = [
  {
    id: "1",
    name: "Abbas Xamidov",
    email: "abbas.xamidov@example.com",
    password: "password123",
    avatar: "/avatar.jpg",
    role: "owner",
    fallback: "AX",
    online: true,
  },
  {
    id: "2",
    name: "Майк Макаронский",
    email: "user3@example.com",
    password: "password123",
    avatar:
      "https://pikuco.ru/upload/test_stable/b07/b0710f6c2fa863b2b3c837a48e9ab3a7.webp",
    role: "editor",
    fallback: "U3",
    online: true,
  },
  {
    id: "3",
    name: "Тайлер Дуркен",
    email: "user1@example.com",
    role: "viewer",
    password: "password123",
    avatar:
      "https://i.pinimg.com/originals/cd/25/ef/cd25efab92ceba3187f4998b2c9647c2.jpg",
    fallback: "U1",
    online: false,
  },
  {
    id: "4",
    name: "Пубертатный анимешник",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_47E-xJxkvY_evW4sYeImqaing13yGU1Rw&s",
    fallback: "U2",
    online: true,
  },
  {
    id: "5",
    name: "Сухой мен",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*4nS2VatBX_rlgVZJ",
    fallback: "U2",
    online: false,
  },
  {
    id: "6",
    name: "JOTARO KAZAKSKI",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hULrDegf-o0Wh59ewcvyOfNf53e2e_wW-w&s",
    fallback: "U2",
    online: false,
  },
  {
    id: "7",
    name: "П0П1НИ GУДИНИ",
    email: "user2@example.com",
    role: "editor",
    password: "password123",
    avatar:
    "https://basket-23.wbbasket.ru/vol3959/part395989/395989869/images/big/1.webp",
    fallback: "ПG",
    online: true,
  },{
    id: "8",
    name: "Щерзод Ташкентски",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
    "https://www.centralasia-travel.com/upload/text/kebab-02.jpg",
    fallback: "УЗ",
    online: false,
  },{
    id: "9",
    name: "Niga lilo",
    email: "user2@example.com",
    role: "editor",
    password: "password123",
    avatar:
    "https://i.pinimg.com/736x/15/98/d6/1598d68c4f1fd76e853a0ab3a61c3c13.jpg",
    fallback: "NL",
    online: false,
  },{
    id: "10",
    name: "MINI KNIGHT",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
    "https://i.pinimg.com/736x/6c/8e/61/6c8e6183d9ea570bfc84a8be3af61386.jpg",
    fallback: "ML",
    online: false,
  },{
    id: "11",
    name: "Это Мужик",
    email: "user2@example.com",
    role: "viewer",
    password: "password123",
    avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluBl7MtE4JcAMmeagZYtCgZDNTZvsI0TCYw&s",
    fallback: "ЭМ",
    online: false,
  }
];
