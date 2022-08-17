import React from "react";
import "./menuItem.components.scss";

interface Props {
  title: string,
}

export const MenuItem = (props: Props) => {
  return (
    <div className="menuItem">
      {props.title}
    </div>
  )
}
