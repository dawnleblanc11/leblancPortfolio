import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  // TO DO: Clean up tech used and project descriptions
  const [projects] = useState([
    {
      name: "Horiseon-seo",
      category: "frontend",
      description: "Marketing Firm SEO website",
      imgfile: require("../../assets/small/frontend/Horiseonlogo.png"),
      techused: "HTML, CSS",
      link: "https://github.com/dawnleblanc11/First-Assignment",
      github: "https://github.com/dawnleblanc11/First-Assignment",
    },
    {
      name: "Run Buddy",
      category: "frontend",
      description:
        "Website for fitness training services companies to attract new clients",
      imgfile: require("../../assets/small/frontend/RunBuddy.png"),
      techused: "HTML, CSS",
      link: "https://lernantino.github.io/run-buddy/",
      github: "https://lernantino.github.io/run-buddy/",
    },
    {
      name: "Password Generator",
      category: "frontend",
      description:
        "This application project will generate a random password from 8 to 128 char in length. It considers user selected criteria with an assortment of uppercase, numeric and special characters. ",
      imgfile: require("../../assets/small/frontend/Password.png"),
      techused:
        "Dynamically updated HTML and CSS powered by JavaScript code",
      link: "https://dawnleblanc11.github.io/password-generator/",
      github: "https://dawnleblanc11.github.io/password-generator/",
    },
    {
      name: "Code Quiz",
      category: "frontend",
      description:
        "An interactive timed quiz with questions on Javascript fundamentals. ",
      imgfile: require("../../assets/small/frontend/CodeQuiz.png"),
      techused:
        "Web APIs, HTML, CSS, Javascript",
        link: "https://dawnleblanc11.github.io/Code-Quiz-with-Web-APIs/",
        github: "https://github.com/dawnleblanc11/Code-Quiz-with-Web-APIs",
    },
    {
      name: "Work Day Scheduler",
      category: "frontend",
      description:
        "This application is designed for employees with a busy schedule. It allows them to add important events to a daily planner and manage time effectively. They can also keep track of where they are in their day with color coding.",
      imgfile: require("../../assets/small/frontend/WorkdayScheduler.png"),
      techused:
        "3rd party APIs, Moment.js, JQuery, Javascript",
      link: "https://dawnleblanc11.github.io/workdayschedule-third-party-api/",
      github: "https://github.com/dawnleblanc11/workdayschedule-third-party-api",
    },
    {
      name: "Weather Dashboard",
      category: "frontend",
      description:
        "This application is designed for travelers who want to see the weather outlook for mutliple cities which will help them to better plan their trips.",
      imgfile: require("../../assets/small/frontend/WEATHERDASHBOARD.png"),
      techused:
        "Server Side APIs- Open Weather, Moment.js, HTML, CSS, Javascript",
      link: "https://dawnleblanc11.github.io/weatherdashboard-serversideAPIs/",
      github: "https://github.com/dawnleblanc11/weatherdashboard-serversideAPIs"
    },
    {
      name: "mArty",
      category: "frontend",
      description:
        "mARTy is an ART matching tool application designed for casual visitors to art museums who may find it overwhelming to enter a large museum like the Metropolitan Museum of Art. ",
      imgfile: require("../../assets/small/frontend/mARTy.png"),
      techused:
        "HTML, CSS, Bulma, Javascript and JQuery",
        link: "https://dawnleblanc11.github.io/mArty/",
        github:"https://github.com/dawnleblanc11/mArty",
    },
    {
      name: "ReadMe Generator",
      category: "backend",
      description:
        "Designed to quickly and easily generate a README file by using a command-line application to generate one. ",
      imgfile: require("../../assets/small/backend/README.png"),
      techused:
        "Javascript, Node.js",
        link: "https://github.com/dawnleblanc11/myreadmemaker",
        github: "https://github.com/dawnleblanc11/myreadmemaker",
    },
    {
      name: "Team Profile Generator",
      category: "backend",
      description:
        "Creates a development team roster based on user inputs.",
      imgfile: require("../../assets/small/backend/TeamProfile.png"),
      techused:
        "OOP, HTML, Javascript, CSS. Node.js",
        link: "https://github.com/dawnleblanc11/teamprofilegeneratorOOP",
        github: "https://github.com/dawnleblanc11/teamprofilegeneratorOOP",
    },
    {
      name: "Notetaker",
      category: "backend",
      description:
        "A small business owner wanted to be able to write and save notes to organize thoughts, keep track of tasks and delete them when completed.",
      imgfile: require("../../assets/small/backend/NoteTaker.png"),
      techused:
        "Express.js, CSS, Node.js, Heroku",
      link: 'https://expressnotetaker-dl.herokuapp.com/',
      github: "https://github.com/dawnleblanc11/expressnotetaker",

    },
    {
      name: "Employee Tracker",
      category: "backend",
      description:
        "Owner of a large business with many departments, keeps track of employees and managers data and who is working where, what are their salaries and who they report to.",
      imgfile: require("../../assets/small/backend/HawkTracker.png"),
      techused:
        "MYSQL, Inquirer, Node.js, PrintTable",
        link: 'https://github.com/dawnleblanc11/employeetrackersql',
        github: 'https://github.com/dawnleblanc11/employeetrackersql',
    },
    {
      name: "ECommerce Backend",
      category: "backend",
      description:
        "A manager at an internet retail company wants a back end e-commerce website that uses the latest technologies so that the company can compete with other e-commerce companies",
      imgfile: require("../../assets/small/backend/Ecommerce.png"),
      techused:
        "MYSQL, Sequelize, Seeds, Insomnia",
        link: 'https://github.com/dawnleblanc11/eshopping',
        github: 'https://github.com/dawnleblanc11/eshopping'
    },
    {
      name: "TechBlog",
      category: "backend",
      description:
        "As developer who writes about tech this CMS-style blog site enables me to publish articles, write blog posts, and include my thoughts and opinions on other tech posts on the site.",
      imgfile: require("../../assets/small/backend/TechBLOG.png"),
      techused:
        "HTML, Javascript, CSS, Node.js, Bootstrap, dotenv, MYSQL2, Sequelize, bycrypt, express.js, express session, express session sequelize and handlebars",
      link: 'https://calm-springs-46414.herokuapp.com/',
      github: 'https://github.com/dawnleblanc11/techblog',
      },
    {
      name: "Beach Blog",
      category: "backend",
      description:
        "This blog will let you hear form others the best beaches in your location.",
      imgfile: require("../../assets/small/backend/BeachBlog.png"),
      techused:
        "Node.js, Express.js, RESTful API, Handlebars.js, MySQL, Sequelize ORM, day.js",
      link: 'https://evening-retreat-41294.herokuapp.com/',
      github: 'https://github.com/trm621/uconn-project-two',
      },
    
    {
      name: "Regex Tutorial",
      category: "fullstack",
      description:
        "A Gist tutorial on an email validation RegEx.",
      imgfile: require("../../assets/small/fullstack/EmailRegex.png"),
      techused:
        "regex, Gist",
      link: "https://gist.github.com/dawnleblanc11/0ce4324fe6f1693e29f79c7e77de508e",
      github: "https://gist.github.com/dawnleblanc11/0ce4324fe6f1693e29f79c7e77de508e",
    },
    {
      name: "Social Network API",
      category: "fullstack",
      description:
        "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Website should be able to handle large amounts of unstructured data.",
      imgfile: require("../../assets/small/fullstack/SocialnetworkAPIs.png"),
      techused:
        "Mongo database, JS for Routing and Moongoose ODM, Dataformat Library and Insomnia",
      link: "https://github.com/dawnleblanc11/socialnetworkapi",
      github: "https://github.com/dawnleblanc11/socialnetworkapi",
    },
    {
      name: "Budget Tracker",
      category: "fullstack",
      description:
        "A budget tracker for travelers in remote locations with limited connection to cell service. This budget tracker app works with or without internet/cell connection. Giving users a fast and easy way to track their money and allowing them to access that information at any time.",
      imgfile: require("../../assets/small/fullstack/BudgetTrackerLogo.png"),
      techused:
        "HTML/ CSS/ MongoDB/ MongoDB Atlas/ Moongoose/ Morgan/ Express/ Compression/ Heroku/ Liteserver/ PWA- Manifest/ Serivce Worker/ Cache/ Indexed DB",
      link: "https://desolate-wave-76805.herokuapp.com/",
      github: "https://github.com/dawnleblanc11/budgettrackerpwa"
    },
    {
      name: "Trail Talk",
      category: "fullstack",
      description:
        "Trail Talk App will help you enjoy your National Park Visit even more.  Chatting with others who have experienced the park before then create a plan to enjoy the magnificence of what nature has to offer.",
      imgfile: require("../../assets/small/fullstack/TrailTalk.png"),
      techused:
        "HTML/ CSS/ MongoDB/ MongoDB Atlas/ Moongoose/ Morgan/ Express/ Compression/ Heroku/ Liteserver/ PWA- Manifest/ Serivce Worker/ Cache/ Indexed DB",
      link: "https://pacific-shelf-58337.herokuapp.com/",
      github: "https://github.com/trm621/national-park-social-app"
    },
    
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

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
            className="img-thumbnail project"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
