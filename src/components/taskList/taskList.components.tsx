import React from "react";
import "./taskList.components.scss";
import { TaskCard } from "../taskCard/taskCard.components";
import tasksState from "../../store/tasks.store";
import { observer } from "mobx-react-lite";

export const TaskList = observer((): JSX.Element => {
  return (
    <div className="taskList">
      {tasksState.tasks.length !== 0 ?
        tasksState.tasks.map(task => {
          return (
            <TaskCard key={task.id} task={task} />
          )
        })
        :
        <div>no tasks</div>
      }
    </div>
  )
})
