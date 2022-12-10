import React from "react";
import { Card } from "react-bootstrap";
import './PortfolioCard.css'

const PortfolioCard = ({portfolioList}) => {
  return (
    <div className="row my-5">
      {portfolioList.map((portfolio) => (
        <div className="col-md-4 d-md-flex mb-4" key={portfolio.name}>
          <Card className="light__white__color home_work_card">
            <Card.Img variant="top" src={portfolio.Image} />
            <Card.Body>
              <Card.Title>{portfolio.name}</Card.Title>
              <Card.Text className="small">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div>
                {portfolio.technologys.map((technology) => (
                  <span key={technology} className="technology">
                    {technology}
                  </span>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around flex-wrap">
              {portfolio.links.map((link) => (
                <a
                  className="btn btn-outline-success btn-sm mb-3"
                  key={link.link}
                  href={link.link}
                  target="_black"
                >
                  {link.linkType}
                </a>
              ))}
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
