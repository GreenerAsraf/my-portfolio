import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SectionTitle.css";

const SectionTitle = ({ colorText, headingText, buttonText, buttonLink }) => {
  return (
    <div className="work__title col-md-7 p-0">
      <h1 className="h2 light__white__color">
        <span className="light__green__color">{colorText}</span> {headingText}
      </h1>
      <div className="text-right">
        <Link to={`${buttonLink || "/"}`} className="section_title__button_container d-flex align-items-center">
          <Button className="section__title__button" variant="outline-success" size="sm">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionTitle;
