import { makeAutoObservable } from "mobx";

class ModalState {
  open: boolean = false;
  content: undefined | JSX.Element = undefined;

  constructor() {
    makeAutoObservable(this)
  }

  modalToggle(content: undefined | JSX.Element) {
    this.open = this.open === false ? true : false;
    this.content = this.content !== undefined ? undefined : content;
  }
}

export default new ModalState();
