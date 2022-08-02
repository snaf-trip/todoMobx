import modalState from "../../store/modal.store";
import tasksState from "../../store/tasks.store";

export const createTask = (
  title: null | string,
  description: null | string,
) => {
  if (title.length !== 0) {
    //it's temporary
    let date = new Date();
    let id = date.getHours() + date.getMinutes() + date.getMilliseconds();

    tasksState.addTask({ id: id, title: title, description: description });
    modalState.modalToggle(undefined);
  }
}
