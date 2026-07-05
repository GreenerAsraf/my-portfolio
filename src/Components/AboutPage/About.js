import React from "react";
import Image from "next/image";
import AboutDetails from "./AboutDetails/AboutDetails";
import SkillsDetails from "./SkillDetails/SkillsDetails";

const About = () => {
  return (
    <section className="container">
      <div className="row pt-5 align-items-center">
        <div className="col-md-5 mb-4 mb-md-0" style={{ position: 'relative', minHeight: '400px' }}>
          <Image
            src="/profile-pic.JPG"
            alt="Mohammed Asraf Uddin"
            className="img-fluid shadow-lg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ 
              objectFit: 'cover', 
              border: '4px solid rgba(0, 255, 170, 0.3)', 
              borderRadius: '15px' 
            }}
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
