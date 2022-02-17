import React from 'react';
import ProjectList from '../ProjectList';
//import { capitalizeFirstLetter } from '../../utils/helpers';

const Gallery = ({currentCategory,description}) => {
  console.log(currentCategory)
  return (
    <section>
      <h1 data-testid="h1tag">{currentCategory}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory} />
    </section>
  );
}
export default Gallery;