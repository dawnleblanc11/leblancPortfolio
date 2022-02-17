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
        'Marketing Firm SEO website',
      imgfile: require ('../../assets/small/frontend/Horiseonlogo.png'),
      techused: 'HTML, CSS',
      link:'https://github.com/dawnleblanc11/First-Assignment'
    },
    {
      name: 'Run Buddy',
      category: 'frontend',
      description:
        'Website for fitness training services companies to attract new clients',
      imgfile: require ('../../assets/small/frontend/RunBuddy.png'),
      techused: 'HTML, CSS',
      link:'https://lernantino.github.io/run-buddy/'
    },
    {
      name: 'Budget Tracker',
      category: 'fullstack',
      description:
        'A budget tracker for travelers in remote locations with limited connection to cell service. This budget tracker app works with or without internet/cell connection. Giving users a fast and easy way to track their money and allowing them to access that information at any time.',
        imgfile: require ('../../assets/small/fullstack/BudgetTrackerLogo.png'),
        techused: 'HTML/ CSS/ MongoDB/ MongoDB Atlas/ Moongoose/ Morgan/ Express/ Compression/ Heroku/ Liteserver/ PWA- Manifest/ Serivce Worker/ Cache/ Indexed DB',
        link: 'https://git.heroku.com/desolate-wave-76805.git '
      },
    {
      name: 'Social Network API',
      category: 'backend',
      description:
        'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Website should be able to handle large amounts of unstructured data.',
        imgfile: require ('../../assets/small/backend/SocialnetworkAPIs.png'),
        techused: 'NoSql database- specifically Mongo DB, Express.js for routing and the Mongoose ODM. In addtion, used Javasript date library- date Format to format timestaps and Insomnia for testing all API routes.',
        link: 'https://github.com/dawnleblanc11/socialnetworkapi'
      },
    {
      name: 'Password Generator',
      category: 'frontend',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        imgfile: require ('../../assets/small/frontend/Password.png'),
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
