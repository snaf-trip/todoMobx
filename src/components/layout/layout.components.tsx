import React from "react";
import "./layout.components.scss";
import { Outlet } from "react-router-dom";
import { Menu } from "../menu/menu.components";

export const Layout = () => {
  return (
    <div className="layout">
      <Menu />
      <Outlet />
    </div>
  )
}
