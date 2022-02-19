import React from "react";

const Modal = ({ onClose, currentProject }) => {
  const { name, description, category, imgfile, techused, link, github } =
    currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">
          {name} example of {category} project
        </h3>
        <img src={imgfile} alt="current category" />
        <p>Project Description: {description}</p>
        <p>Technology utilized: {techused}</p>
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            Link Directly to Project
          </a>
        </p>
        <p>
          <a href={github} target="_blank" rel="noreferrer">
            Link Directly to GitHub
          </a>
        </p>
        <button type="button" onClick={onClose}>
          Return to Projects
        </button>
      </div>
    </div>
  );
};

export default Modal;
