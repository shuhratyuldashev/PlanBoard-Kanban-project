export interface Project {
  id: string;
  name: string;
  isPublic: boolean;
  isYour: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    isPublic: true,
    isYour: false
  },
  {
    id: "2",
    name: "Project 2",
    isPublic: false,
    isYour: false
  },
  {
    id: "3",
    name: "Project 3",
    isPublic: true,
    isYour: false
  },
];
