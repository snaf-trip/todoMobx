import { makeAutoObservable } from "mobx";
import { TaskType } from "../types/task.types";

class TasksState {
  tasks: TaskType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task: TaskType) {
    console.log("aDD Task");
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  deleteTask(id: number) {
    this.tasks.forEach((task, i) => {
      task.id === id ? this.tasks.splice(i, 1) : null;
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

export default new TasksState();
