import { TasksPage, SignInPage, SignUpPage } from "../../pages/export.pages";

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
    path: '/signup',
    exact: true,
    component: SignUpPage,
    auth: false,
  },
  {
    path: '/signin',
    exact: true,
    component: SignInPage,
    auth: false,
  },
];
