// src/shared/mock/columns.ts
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
  columnId: string;
}

// mock колонок
export const columns_list: ColumnType[] = [
  { id: "c1", title: "Backlog",        color: "bg-secondary" },
  { id: "c2", title: "Planned",        color: "bg-secondary" },
  { id: "c3", title: "In Progress",    color: "bg-secondary" },
  { id: "c4", title: "Review",         color: "bg-primary" },
  { id: "c5", title: "Debugging",      color: "bg-secondary" },
  { id: "c6", title: "Testing",        color: "bg-amber-500" },
  { id: "c7", title: "Completed",      color: "bg-primary" },
  { id: "c8", title: "Deployed",       color: "bg-green-600" },
];

// mock задач
export const tasks_list: TaskType[] = [
  {
    id: "t1",
    title: "Design login page UI",
    description: "Create wireframes and final UI for login page",
    importance: "medium",
    columnId: "c1",
  },
  {
    id: "t2",
    title: "Fix navbar flickering bug",
    description: "Occurs on scroll when theme toggle is visible",
    importance: "high",
    columnId: "c5",
  },
  {
    id: "t3",
    title: "Set up CI/CD",
    description: "Add GitHub Actions for build & test",
    importance: "medium",
    columnId: "c3",
  },
  {
    id: "t4",
    title: "Write unit tests for user service",
    description: "Cover login and register flows",
    importance: "low",
    columnId: "c6",
  },
  {
    id: "t5",
    title: "Implement dark mode",
    description: "Add Tailwind dark: classes + theme switch",
    importance: "medium",
    columnId: "c4",
  },
  {
    id: "t6",
    title: "Optimize images",
    description: "Compress assets and enable lazy loading",
    importance: "low",
    columnId: "c2",
  },
  {
    id: "t7",
    title: "Fix 500 error on checkout",
    description: "Server crashes under heavy load",
    importance: "high",
    columnId: "c5",
  },
  {
    id: "t8",
    title: "Add 2FA authentication",
    description: "Send verification codes via email",
    importance: "high",
    columnId: "c1",
  },
  {
    id: "t9",
    title: "Refactor user settings page",
    description: "Improve readability, split components",
    importance: "medium",
    columnId: "c3",
  },
  {
    id: "t10",
    title: "Create REST API docs",
    description: "OpenAPI schema + examples",
    importance: "low",
    columnId: "c7",
  },
  {
    id: "t11",
    title: "Product card drag reordering",
    description: "Enable DnD for product list",
    importance: "medium",
    columnId: "c4",
  },
  {
    id: "t12",
    title: "Dashboard analytics redesign",
    description: "Add charts, statistics and KPIs",
    importance: "high",
    columnId: "c2",
  },
  {
    id: "t13",
    title: "Database index optimization",
    description: "Improve slow queries on orders table",
    importance: "high",
    columnId: "c5",
  },
  {
    id: "t14",
    title: "Implement global search",
    description: "Add smart fuzzy search across project",
    importance: "medium",
    columnId: "c3",
  },
  {
    id: "t15",
    title: "Fix mobile layout for profile page",
    description: "Buttons overlap text on smaller screens",
    importance: "low",
    columnId: "c4",
  },
  {
    id: "t16",
    title: "Enable server-side rendering",
    description: "Improve SEO for marketing pages",
    importance: "medium",
    columnId: "c1",
  },
  {
    id: "t17",
    title: "Add email templates",
    description: "Welcome, reset password, notifications",
    importance: "low",
    columnId: "c7",
  },
  {
    id: "t18",
    title: "Integrate Stripe payments",
    description: "One-time and recurring payments",
    importance: "high",
    columnId: "c2",
  },
  {
    id: "t19",
    title: "Fix WebSocket disconnect issue",
    description: "Socket drops every 5 minutes",
    importance: "medium",
    columnId: "c5",
  },
  {
    id: "t20",
    title: "Add role-based access control",
    description: "Admin, manager, user permissions",
    importance: "high",
    columnId: "c1",
  },
  {
    id: "t21",
    title: "Setup Docker containers",
    description: "Frontend, backend, database",
    importance: "medium",
    columnId: "c7",
  },
  {
    id: "t22",
    title: "Create onboarding flow",
    description: "Interactive tour for new users",
    importance: "low",
    columnId: "c6",
  },
  {
    id: "t23",
    title: "Fix incorrect date formatting",
    description: "Timezone mismatch on client",
    importance: "medium",
    columnId: "c5",
  },
  {
    id: "t24",
    title: "Add Markdown editor",
    description: "For notes and documentation",
    importance: "low",
    columnId: "c1",
  },
  {
    id: "t25",
    title: "Implement notifications system",
    description: "Toast and panel notifications",
    importance: "medium",
    columnId: "c3",
  },
  {
    id: "t26",
    title: "Create admin dashboard",
    description: "Roles, analytics, system info",
    importance: "high",
    columnId: "c2",
  },
  {
    id: "t27",
    title: "Add avatar upload",
    description: "Auto-cropping & compression",
    importance: "low",
    columnId: "c4",
  },
  {
    id: "t28",
    title: "Fix slow image gallery",
    description: "Client freezes when opening gallery",
    importance: "high",
    columnId: "c5",
  },
  {
    id: "t29",
    title: "Add language switcher",
    description: "i18n for EN/RU/UZ",
    importance: "medium",
    columnId: "c7",
  },
  {
    id: "t30",
    title: "Improve accessibility",
    description: "Aria tags, focus states",
    importance: "low",
    columnId: "c2",
  },
];
