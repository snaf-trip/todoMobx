import React from "react";
import "./tasksPage.pages.scss";
import { TaskList } from "../../components/taskList/taskList.components";
import modalState from "../../store/modal.store";

export const TasksPage = () => {
  return (
    <div className="tasksPage">
      <button onClick={() => modalState.modalToggle(<div>Add task</div>)}>add task</button>
      <TaskList />
    </div>
  )
}
