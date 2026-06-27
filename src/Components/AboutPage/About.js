import React from "react";
import AboutDetails from "./AboutDetails/AboutDetails";
import SkillsDetails from "./SkillDetails/SkillsDetails";

const About = () => {
  return (
    <section className="container">
      <div className="row pt-5 align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src="/profile-pic.JPG"
            alt="Mohammed Asraf Uddin"
            className="img-fluid rounded shadow-lg"
            style={{ border: '4px solid rgba(0, 255, 170, 0.3)', borderRadius: '15px' }}
          />
        </div>
        <div className="col-md-7">
          <AboutDetails />
          <SkillsDetails/>
        </div>
      </div>
    </section>
  );
};

export default About;
