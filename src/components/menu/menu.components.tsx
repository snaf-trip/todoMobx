import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.components.scss";
import { MenuItem } from "./menuItem.components";

export const Menu = () => {
  return (
    <div className="menu">
      <p className="menu__logo">todos.</p>
      <nav>
        <NavLink
          className={
            ({ isActive }) => `menuItem__link ${isActive ? "menuItem_active" : ""}`
          }
          to={"/profile"}
        >
          <MenuItem title="Profile" />
        </NavLink>
        <NavLink
          className={
            ({ isActive }) => `menuItem__link ${isActive ? "menuItem_active" : ""}`
          }
          to={"/tasks"}
        >
          <MenuItem title="Tasks" />
        </NavLink>
        <NavLink
          className={
            ({ isActive }) => `menuItem__link ${isActive ? "menuItem_active" : ""}`
          }
          to={"/statistics"}
        >
          <MenuItem title="Statistics" />
        </NavLink>

        <NavLink
          className={
            ({ isActive }) => `menuItem__link ${isActive ? "menuItem_active" : ""}`
          }
          to={"/settings"}
        >
          <MenuItem title="Settings" />
        </NavLink>
      </nav>
      <p className="menu__appVersion">v 1.0.0</p>
    </div>
  )
}
