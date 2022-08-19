import React from "react";
import "./menu.components.scss";
import { MenuItem } from "./menuItem.components";

export const Menu = () => {
  return (
    <div className="menu">
      <p className="menu__logo">todos.</p>
      <MenuItem title="Profile" />
      <MenuItem title="Tasks" />
      <MenuItem title="Statistics" />
      <MenuItem title="Settings" />
    </div>
  )
}
