import React from "react";
import coverImage from '../../assets/cover/christoffer-engstrom-wc9avd2RaN0-unsplash.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Hello, I'm Dawn LeBlanc.&nbsp;&nbsp;Although a geek at heart, I
          perform best at the intersection of innovation, creativity and
          technology.&nbsp;&nbsp;My belief is that with the right team, great
          outcomes can be created when everyone is heard and
          inspired.&nbsp;&nbsp;My experience includes product line leader and
          executive for major insurers, directing a bootcamp for InsurTech
          startups from all over the world and now my newest adventure full
          stack coding.&nbsp;&nbsp;Would love for you to get in touch and I will
          respond ASAP when I am not enjoying the beach, walking my dogs or
          trying a new recipe.
        </p>
      </div>
    </section>
  );
}

export default About;
