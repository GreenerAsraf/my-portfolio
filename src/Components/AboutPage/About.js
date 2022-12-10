import React from "react";
import AboutDetails from "./AboutDetails/AboutDetails";
import SkillsDetails from "./SkillDetails/SkillsDetails";

const About = () => {
  return (
    <section className="container">
      <div className="row pt-5">
        <AboutDetails />
        <SkillsDetails/>
      </div>
    </section>
  );
};

export default About;
