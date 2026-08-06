"use client";

import React, { useState } from "react";
import PortfolioCard from "../ShearedFolder/PortfolioCard/PortfolioCard";
import "./PortfolioPage.css";
import portfolioList from "../ProjectList/ProjectList";
import { useLanguage } from "../LanguageProvider/LanguageProvider";

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTERS = [
    { key: "All", label: t.portfolio.filters.all },
    { key: "Next.js", label: t.portfolio.filters.next },
    { key: "React", label: t.portfolio.filters.react },
    { key: "MERN", label: t.portfolio.filters.mern }
  ];

  const filteredProjects = portfolioList.filter((project) => {
    if (activeFilter === "All") return true;
    
    // Perform case-insensitive match on the project type/technology
    const typeStr = project.type.toLowerCase();
    const filterStr = activeFilter.toLowerCase();
    
    return typeStr.includes(filterStr);
  });

  return (
    <section className="container pt-5">
      <h2 className="light__white__color mb-4 section__title">{t.portfolio.heading}</h2>
      
      {/* Category Filter Pills */}
      <div className="portfolio-filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? "filter-btn--active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <PortfolioCard key={activeFilter} portfolioList={filteredProjects} />
    </section>
  );
};

export default PortfolioPage;
