import tasksState from "../../../store/tasks.store";
import { TaskType } from "../../../types/task.types";

export const filterDone = (
  done: boolean | null,
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
) => {
  switch (done) {
    case true:
      let doneTasks = tasksState.tasks.filter(task => task.completed === true);
      setTasks(doneTasks);
      break;
    case false:
      let unfulfilledTasks = tasksState.tasks.filter(task => task.completed === false);
      setTasks(unfulfilledTasks);
      break;
    case null:
      setTasks(tasksState.tasks);
  }
}
