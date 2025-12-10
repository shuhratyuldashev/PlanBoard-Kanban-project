export interface ColumnType {
  id: string;
  title: string;
  color: string;
}

export interface TaskType {
  id: string;
  title: string;
  description: string;
  importance: "low" | "medium" | "high";
  status: "backlog" | "in-progress" | "completed" | "debugging" | "deployed";
}

export const columns_list: ColumnType[] = [
  {
    id: "1234",
    title: "Backlog",
    color: "bg-secondary",
  },
  {
    id: "1235",
    title: "In Progress",
    color: "bg-secondary",
  },
  {
    id: "1236",
    title: "Completed",
    color: "bg-primary",
  },
  {
    id: "1237",
    title: "Debugging",
    color: "bg-secondary",
  },
  {
    id: "1238",
    title: "Deployed",
    color: "bg-amber-500",
  },
  {
    id: "1235",
    title: "In Progress",
    color: "bg-secondary",
  },
  {
    id: "1236",
    title: "Completed",
    color: "bg-primary",
  },
  {
    id: "1237",
    title: "Debugging",
    color: "bg-secondary",
  },
  {
    id: "1238",
    title: "Deployed",
    color: "bg-amber-500",
  },
];

export const tasks_list: TaskType[] = [
  {
    id: "11",
    title: "Task 1",
    description: "Description 1",
    importance: "low",
    status: "backlog",
  },
  {
    id: "12",
    title: "Task 2",
    description: "Description 2",
    importance: "medium",
    status: "in-progress",
  },
  {
    id: "13",
    title: "Task 3",
    description: "Description 3",
    importance: "high",
    status: "completed",
  },
  {
    id: "12",
    title: "Task 2",
    description: "Description 2",
    importance: "medium",
    status: "in-progress",
  },
  {
    id: "13",
    title: "Task 3",
    description: "Description 3",
    importance: "high",
    status: "completed",
  },
  {
    id: "12",
    title: "Task 2",
    description: "Description 2",
    importance: "medium",
    status: "in-progress",
  },
  {
    id: "13",
    title: "Task 3",
    description: "Description 3",
    importance: "high",
    status: "completed",
  },
];
