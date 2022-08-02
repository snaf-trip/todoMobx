import React from 'react';
import "./modalWindow.components.scss";
import modalState from "../../store/modal.store";
import { observer } from 'mobx-react-lite';

export const ModalWindow = observer((): JSX.Element => {
  return (
    <div
      className={modalState.open === true ? "modal" : "modal_hide"}
      onClick={() => modalState.modalToggle(undefined)}
    >
      <div
        className="modal__content"
        onClick={e => e.stopPropagation()}
      >
        {modalState.content}
      </div>
    </div >
  )
})

