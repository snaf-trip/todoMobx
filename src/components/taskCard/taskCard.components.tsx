import React from "react";
import { TaskType } from "types/task.types";
import "./taskCard.components.scss";

interface Props {
  task: TaskType,
}

export const TaskCard = (props: Props): JSX.Element => {
  return (
    <div className="taskCard">{props.task.title}</div>
  )
}
