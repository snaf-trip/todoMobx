import React, { useState } from "react";
import "./modalAddTask.components.scss";
import { createTask } from "../../../../utils/createTask/createTask.utils";

export const ModalAddTask = (): JSX.Element => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <div>
      Create new task
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <button
        onClick={() => { createTask(title, description) }}
      >
        create
      </button>
    </div>
  )
}
