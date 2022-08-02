import React from "react";
import "./taskList.components.scss";
import { TaskCard } from "../taskCard/taskCard.components";

export const TaskList = (): JSX.Element => {
  return (
    <div className="taskList">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}
