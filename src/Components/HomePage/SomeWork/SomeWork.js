import React from "react";
import "./SomeWork.css";
import SectionTitle from "../../ShearedFolder/SectionTitle/SectionTitle";
import PortfolioCard from "../../ShearedFolder/PortfolioCard/PortfolioCard";
import ProjectList from '../../ProjectList/ProjectList'

const SomeWork = () => {
  return (
    <section className="container">     
      <SectionTitle
        colorText={"Some of"}
        headingText={"my works"}
        buttonText={"All Works"}
        buttonLink={"/portfolio"}
      />
      <PortfolioCard portfolioList={ProjectList.slice(0,3)} />
    </section>
  );
};

export default SomeWork;
