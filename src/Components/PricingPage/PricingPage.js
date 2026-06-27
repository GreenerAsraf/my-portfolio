"use client";

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PricingPage.css';

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: [
        "Single Page Application",
        "Responsive Design",
        "Basic SEO",
        "1 Month Support"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$99",
      features: [
        "Up to 5 Pages",
        "Advanced SEO & Performance",
        "Content Management System",
        "6 Months Support"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "$199",
      features: [
        "Unlimited Pages",
        "Custom Animations",
        "E-commerce Integration",
        "1 Year Priority Support"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="container pt-5 pricing-section">
      <h2 className="light__white__color mb-5 section__title">Pricing Plans</h2>
      <Row className="justify-content-center">
        {plans.map((plan, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className={`pricing-card h-100 ${plan.isPopular ? 'popular-card' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="plan-name">{plan.name}</Card.Title>
                <div className="plan-price my-3">{plan.price}</div>
                <ul className="plan-features list-unstyled mb-4 flex-grow-1">
                  {plan.features.map((feature, i) => (
                    <li key={i}><span className="check-icon">✓</span> {feature}</li>
                  ))}
                </ul>
                <Button variant={plan.isPopular ? 'primary' : 'outline-light'} className="pricing-btn mt-auto w-100">
                  Choose Plan
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default PricingPage;
