import React from 'react';
import { Card } from "react-bootstrap";
import './ArticelCard.css'

const ArticelCard = ({articelList}) => {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    return (
        <div className="my-5 col-md-8 d-flex flex-wrap p-0">
        {articelList.map((articel) => (
          <a className="col-md-6 light__white__color mb-5 d-md-flex text-decoration-none some__articel__home" href={articel.link} target="_blank">
            <Card>
              <Card.Img variant="top" src={articel.image} />
              <Card.Body>
                <Card.Title>{articel.title}</Card.Title>
                <Card.Text className="small">
                  {truncate(articel.description, 100)}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                  {articel.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="w-100 text-right" >6 may 2022</p>
              </Card.Footer>
            </Card>
          </a>
        ))}
      </div>
    );
};

export default ArticelCard;