import React, { useState } from "react";
import { TaskType } from "types/task.types";
import "./taskCard.components.scss";
import tasksState from "../../store/tasks.store";
import { observer } from "mobx-react-lite";

interface Props {
  task: TaskType,
}

export const TaskCard = observer((props: Props): JSX.Element => {
  return (
    <div className={`taskCard ${props.task.completed === true ? "taskCard_completed" : ""}`}>
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => { tasksState.completeTask(props.task.id) }} />
      <h3>{props.task.title}</h3>
      <p>{props.task.description}</p>
      <button onClick={() => { tasksState.deleteTask(props.task.id) }}>DELETE</button>
    </div>
  )
})
