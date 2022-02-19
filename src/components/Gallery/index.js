import React from "react";
import ProjectList from "../ProjectList";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Gallery = ({ currentCategory, description }) => {
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory)}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory} />
    </section>
  );
};
export default Gallery;
