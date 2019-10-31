import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ children, title, open = false }) => (
  <Popup open={open} modal>
    {(close) => (
      <div className="modal">
        <button type="button" className="modal__close" onClick={close}>
          &times;
        </button>
        <div className="modal__header">
          {title}
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    )}
  </Popup>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
