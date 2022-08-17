import React from "react";
import "./menu.components.scss";
import { MenuItem } from "./menuItem.components";

export const Menu = () => {
  return (
    <div className="menu">
      <MenuItem title="menu item 1" />
      <MenuItem title="menu item 2" />
      <MenuItem title="menu item 3" />
      <MenuItem title="menu item 4" />
    </div>
  )
}
