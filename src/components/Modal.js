import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';


const Modal = ({ children, title, open }) => {
  const [isOpen, setIsOpen] = useState(open);
  const handleClose = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button type="button" className="modal__close" onClick={handleClose}>
          <span className="modal__close-line" />
          <span className="modal__close-line" />
        </button>
        {title && (
        <div className="modal__header">
          {title}
        </div>
        )}
        <div className="modal__content">
          {children}
        </div>
      </div>

    </div>
  );
};

Modal.defaultProps = {
	title: '',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default Modal;
