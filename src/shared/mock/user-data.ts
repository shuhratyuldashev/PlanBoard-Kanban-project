export interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  fallback: string;
}

export const userData: UserType = {
  id: "1",
  name: "Abbas Xamidov",
  email: "abbas.xamidov@example.com",
  password: "password123",
  avatar: "/avatar.jpg",
  fallback: "AX",
};
