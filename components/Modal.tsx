import * as React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 666;
    background-color: rgba(0,0,0,0.70);
`;

const ModalMain = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    min-height: 20vh;
    z-index: 666;
    border-radius: 25px;
    background-color: #fcfcfc;

    & .modal {
      &__content {
        margin: 0;
        padding: 12px
      }
    }


    & button {
      position: relative;
      left: 100%;
      padding: 12px;
      transform: translateX(-100%);
    }
`;

const ModalHeader = styled.header`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 60px;
    background-color: navy;
`;

const Modal = ({ message, onClose }) => {
  return (
    <React.Fragment>
      <Backdrop onClick={() => onClose()} />
      <ModalMain>
        <ModalHeader />
        <div className="modal__content">
          <p>{message}</p>
          <button type="button" onClick={() => onClose()}>Dismiss</button>
        </div>
        
      </ModalMain>
    </React.Fragment>
  );
};

export default Modal;
