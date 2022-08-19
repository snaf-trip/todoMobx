import React, { FC } from "react";
import { Layout } from "../layout/layout.components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignInPage, SignUpPage, TasksPage } from "../../pages/export.pages";
import { routes } from "./routesList.components";
import { RequireAuth } from "../../hooks/requireAuth.hooks";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <TasksPage />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/login" element={<SignInPage />} />
        <Route path="/registration" element={<SignUpPage />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="*" element={<div>404</div>} />

        {/* {routes.map(route => {
          if (route.auth && !isAuth) {
            return false;
          } else if (route.path === "/auth" && isAuth) {
            return false;
          }

          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={`route ${route.path}`}
            />
          )
        })}
        <Route element={<div>404</div>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
