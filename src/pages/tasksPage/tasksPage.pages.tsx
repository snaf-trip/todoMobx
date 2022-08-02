import React from "react";
import "./tasksPage.pages.scss";
import { TaskList } from "../../components/taskList/taskList.components";

export const TasksPage = () => {
  return (
    <div className="tasksPage">
      <TaskList />
    </div>
  )
}
