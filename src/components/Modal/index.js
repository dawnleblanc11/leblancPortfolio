import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, category, imgfile, techused} = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} example of {category} project</h3>
        <img
          src={imgfile}
          alt="current category"
        />
        <p>Project Description: {description}</p>
        <p>Technology utilized: {techused}</p>
        <button type="button" onClick={onClose}>
          Return to Projects
        </button>
      </div>
    </div>
  );
};

export default Modal;
