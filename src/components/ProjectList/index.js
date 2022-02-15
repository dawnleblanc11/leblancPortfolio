import React, { useState } from 'react';
import Modal from '../Modal';


const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();
// TO DO: Clean up tech used and project descriptions
  const [projects] = useState([
    {
      name: 'Horiseon-seo',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      imgfile: require ('../../assets/small/frontend/0.png'),
      techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
    },
    {
      name: 'Run Buddy',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      imgfile: require ('../../assets/small/frontend/1.png'),
      techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
    },
    {
      name: 'Budget Tracker',
      category: 'backend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        imgfile: require ('../../assets/small/backend/0.png'),
        techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
    },
    {
      name: 'My Porfolio',
      category: 'fullstack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        imgfile: require ('../../assets/small/fullstack/0.png'),
        techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
    },
    {
      name: 'Password Generator',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        imgfile: require ('../../assets/small/fullstack/0.png'),
        techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
    },
    {
      name: 'My Porfolio',
      category: 'fullstack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        imgfile: require ('../../assets/small/fullstack/0.png'),
        techused: 'Node.js, Express.js, RESTfulAPI, CSS, HandleBars, Express-Session, Sequelize ORM, dayjs, Bulma, Sequelize'
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
      <div className="card">
        {currentProjects.map((image, i) => (
          <img
            src={image.imgfile}
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
