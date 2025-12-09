export interface Project {
  id: string;
  name: string;
  isPublic: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    isPublic: true,
  },
  {
    id: "2",
    name: "Project 2",
    isPublic: false,
  },
  {
    id: "3",
    name: "Project 3",
    isPublic: true,
  },
];
