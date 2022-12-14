import { makeAutoObservable } from "mobx";
import { TaskType } from "../types/task.types";

class TasksState {
  tasks: TaskType[] = [];
  filteredTasks: TaskType[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task: TaskType) {
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  deleteTask(id: number) {
    this.tasks.map((task, i) => {
      task.id === id ? this.tasks.splice(i, 1) : null;
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  completeTask(id: number) {
    this.tasks.map(task => {
      if (task.id === id) {
        task.completed = task.completed ? false : true;
      }
    })
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  filter(condition: string) {
    switch (condition) {
      case "done":
        localStorage.setItem(
          "filteredTasks",
          JSON.stringify(this.tasks.filter(task => task.completed === true))
        )
      default:
        break;
    }
  }
}

export default new TasksState();
