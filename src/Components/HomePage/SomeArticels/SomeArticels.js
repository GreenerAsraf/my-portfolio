import React from "react";
import ArticelCard from "../../ShearedFolder/ArticelCard/ArticelCard";
import SectionTitle from "../../ShearedFolder/SectionTitle/SectionTitle";
import ArticelData from '../../ShearedFolder/ArticelData/ArticelData'

const SomeArticels = () => {
  return (
    <section className="container">
      <SectionTitle
        colorText={"Some of"}
        headingText={"my articel"}
        buttonText={"All Articels"}
        buttonLink={"/blog"}
      />
      <ArticelCard articelList={ArticelData.slice(0,3)}/>
    </section>
  );
};

export default SomeArticels;
