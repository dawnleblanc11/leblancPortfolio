import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Horiseon-seo',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Run Buddy',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Budget Tracker',
      category: 'backend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'My Porfolio',
      category: 'fullstack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
      ]);

  const currentProjects = projects.filter(project => project.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
