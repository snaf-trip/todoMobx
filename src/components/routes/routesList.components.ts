import { TasksPage, AuthPage } from "../../pages/export.pages";

export const routes = [
  {
    path: '/',
    exact: true,
    component: TasksPage,
    auth: true,
  },
  {
    path: '/profile',
    exact: true,
    component: TasksPage,
    auth: true,
  },
  {
    path: '/statistics',
    exact: true,
    component: TasksPage,
    auth: true,
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
    auth: false,
  },
];
