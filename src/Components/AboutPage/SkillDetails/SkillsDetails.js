import React from "react";
import { SkillData } from "../SkillData/SkillData";
import './SkillDetails.css'

const SkillsDetails = () => {
  return (
    <div className="col-md-6 light__white__color">
      {SkillData.map((skillList) => (
        <div key={skillList.categories} className="mb-5">
          <h3 className="section__title">{skillList.categories}</h3>
          <div className="d-flex flex-wrap mt-3">
            {skillList.skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDetails;
