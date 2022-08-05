import React, { useState } from "react";
import { TaskType } from "types/task.types";
import "./taskCard.components.scss";
import tasksState from "../../store/tasks.store";
import { observer } from "mobx-react-lite";
import { BasketSvg } from "../../images/basket"

interface Props {
  task: TaskType,
}

export const TaskCard = observer((props: Props): JSX.Element => {
  return (
    <div className={`taskCard ${props.task.completed === true ? "taskCard_completed" : ""}`}>
      <div className="taskCard__top">
        <input
          className="taskCard__checkbox"
          type="checkbox"
          checked={props.task.completed}
          onChange={() => { tasksState.completeTask(props.task.id) }}
        />
        <h3 className="taskCard__title">{props.task.title}</h3>
      </div>
      <div className="taskCard__bottom">
        <p className="taskCard__date">{props.task.createDate}</p>
        <BasketSvg className="taskCard__del" onClick={() => { tasksState.deleteTask(props.task.id) }} />
      </div>
    </div>
  )
})
