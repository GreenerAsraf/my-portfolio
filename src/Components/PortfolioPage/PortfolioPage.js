"use client";

import React, { useState } from "react";
import PortfolioCard from "../ShearedFolder/PortfolioCard/PortfolioCard";
import "./PortfolioPage.css";
import portfolioList from "../ProjectList/ProjectList";

const FILTERS = ["All", "Next.js", "React", "MERN"];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioList.filter((project) => {
    if (activeFilter === "All") return true;
    
    // Perform case-insensitive match on the project type/technology
    const typeStr = project.type.toLowerCase();
    const filterStr = activeFilter.toLowerCase();
    
    return typeStr.includes(filterStr);
  });

  return (
    <section className="container pt-5">
      <h2 className="light__white__color mb-4 section__title">My Works</h2>
      
      {/* Category Filter Pills */}
      <div className="portfolio-filters">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <PortfolioCard key={activeFilter} portfolioList={filteredProjects} />
    </section>
  );
};

export default PortfolioPage;
