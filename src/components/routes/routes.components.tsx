import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "../../pages/export.pages";
import { routes } from "./routesList.components";

export const Routers = () => {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => {
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
        <Route element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
