import "./Modal.css";

import { FaWindowClose } from "react-icons/fa";

const Modal = ({ show, onClose, msg }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="custom-modal">
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation}>
        <div className="custom-modal-container">
          <div className="custom-modal-body">
            <div className="custom-modal-close" onClick={onClose}>
              <FaWindowClose />
            </div>
            {msg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
