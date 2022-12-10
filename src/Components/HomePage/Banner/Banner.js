import React from "react";
import socialIcons from "./../../SocialIcons/SocailIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "react-typed";
import "./Banner.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Banner = () => {
  return (
    <div className="container banner-section">
      <div className="row">
        <div className="col-md-6">
          <h5 className="light__green__color fw-400">Hello I'm </h5>
          <h1>Mohammed Asraf Uddin</h1>
          <h5>
            I'm{" "}
            <span className="light__green__color fw-400">
              <Typed
                strings={[
                  "Web Designer",
                  "JavaScript Developer",
                  "Web Developer",
                  "MERN Stack Developer",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></Typed>
            </span>
          </h5>
          <p className="py-3">
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local & multinational Software/ IT
            agencies of Bangladesh and grow rapidly with increasing
            responsibilities.
          </p>
          <div>
            <Button variant="success" className="mr-3" as={Link} to="/aboutMe">
              About Me
            </Button>
            <Button variant="outline-success" as={Link} to="/contact">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>

      <div className="icons mt-4 mt-md-0">
        {socialIcons.map((icon) => (
          <a href={icon.link} key={icon.link} target="_blank">
            <FontAwesomeIcon
              icon={icon.icon}
              className={`${icon.className} icon`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
