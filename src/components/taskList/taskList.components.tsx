import React, { useState } from "react";
import "./taskList.components.scss";
import { TaskCard } from "../taskCard/taskCard.components";
import tasksState from "../../store/tasks.store";
import { observer } from "mobx-react-lite";
import { filterDone } from "../../utils/tasksList/tasksFilters/doneFilter.utils";

export const TaskList = observer((): JSX.Element => {
  const [tasks, setTasks] = useState(tasksState.tasks);

  return (
    <div className="taskList">
      <button onClick={() => filterDone(true, setTasks)} >filter done</button>
      <button onClick={() => filterDone(false, setTasks)} >filter unfulfilled</button>
      <button onClick={() => filterDone(null, setTasks)} >reset filters</button>

      {tasks.length !== 0 ?
        tasks.map(task => {
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
