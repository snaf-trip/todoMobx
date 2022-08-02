import { makeAutoObservable } from "mobx";

class ModalState {
  open = true;

  constructor() {
    makeAutoObservable(this)
  }

  modalToggle() {
    this.open = this.open === false ? true : false;
  }
}

export default new ModalState();
