import React from "react";
import "./tasksPage.pages.scss";
import { TaskList } from "../../components/taskList/taskList.components";
import modalState from "../../store/modal.store";
import { ModalAddTask } from "../../components/modalWindow/modalContents/modalAddTask/modalAddTask.components";

export const TasksPage = (): JSX.Element => {
  return (
    <div className="tasksPage">
      <button onClick={() => modalState.modalToggle(<ModalAddTask />)}>add task</button>
      <TaskList />
    </div>
  )
}
