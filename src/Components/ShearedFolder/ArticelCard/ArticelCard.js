'use client';

import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import './ArticelCard.css';

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
  }),
};

const ArticelCard = ({articelList}) => {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    return (
        <div className="my-5 w-100 article-cards-wrapper">
        {articelList.map((articel, index) => (
          <motion.a
            key={`${articel.link}-${index}`}
            className="col-md-6 light__white__color mb-5 d-md-flex text-decoration-none some__articel__home"
            href={articel.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.22 } }}
          >
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
                <p className="w-100 text-right">6 may 2022</p>
              </Card.Footer>
            </Card>
          </motion.a>
        ))}
      </div>
    );
};

export default ArticelCard;