import React from "react";
import { TasksPage } from "./pages/tasksPage/tasksPage.pages";
import { ModalWindow } from "./components/modalWindow/modalWindow.components";

function App(): JSX.Element {
  return (
    <div>
      <TasksPage />
      <ModalWindow />
    </div>

  )
}

export default App;
