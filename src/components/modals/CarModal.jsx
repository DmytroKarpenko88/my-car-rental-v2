import { CloseIcon } from 'components/icons/CloseIcon';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import style from './CarModal.module.css';

export const CarModal = props => {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName={style.modal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <button className="absolute top-4 right-4" onClick={props.onHide}>
          <CloseIcon className={'stroke-black hover:stroke-red-600'} />
        </button>
        {props.children}
      </Modal.Body>
    </Modal>
  );
};
