import React from "react";
import PortfolioCard from "../ShearedFolder/PortfolioCard/PortfolioCard";
import "./PortfolioPage.css";
import portfolioList from "../ProjectList/ProjectList";

const PortfolioPage = () => {
  return (
    <section className="container pt-5">
      <h2 className="light__white__color mb-5 section__title">My Works</h2>
      <PortfolioCard portfolioList={portfolioList} />
    </section>
  );
};

export default PortfolioPage;
