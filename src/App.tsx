import React from "react";
import { TasksPage } from "./pages/tasksPage/tasksPage.pages";
import { ModalWindow } from "./components/modalWindow/modalWindow.components";
import tasksState from "./store/tasks.store";
import "./App.scss"
import { Menu } from "./components/menu/menu.components";
import { Routers } from "./components/routes/routes.components";

function App(): JSX.Element {

  //initialization tasks and lockalsotrage
  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", '[]');
    console.log("INIT Storage");
  } else {
    tasksState.tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("INIT Tasks");
  }

  return (
    <>
      <div className="app">
        <Menu />
        <Routers />
      </div>
      <ModalWindow />
    </>
  )
}

export default App;
