import React from "react";
import About from "../About";
import Gallery from "../Gallery";
import ContactForm from "../Contact";

const Page = ({ currentCategory }) => {
  const pageswitch = () => {
    switch (currentCategory.name) {
      case "about":
        return <About></About>;
      case "frontend":
        return <Gallery currentCategory={currentCategory.name} description={currentCategory.description}></Gallery>;
      case "backend":
        return <Gallery currentCategory={currentCategory.name} description={currentCategory.description}></Gallery>;
      case "fullstack":
        return <Gallery currentCategory={currentCategory.name} description={currentCategory.description}></Gallery>;
      case "contact":
        return <ContactForm></ContactForm>;
        default:
            return <About></About>
    }

  }
  return(
      <div>
          {pageswitch()}
      </div>
  )
  ;
};

export default Page;
