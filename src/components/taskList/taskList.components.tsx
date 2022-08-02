import React from "react";
import "./taskList.components.scss";
import { TaskCard } from "../taskCard/taskCard.components";

export const TaskList = () => {
  return (
    <div className="taskList">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}
