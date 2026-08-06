"use client";

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PricingPage.css';

import { useLanguage } from "../LanguageProvider/LanguageProvider";

const PricingPage = () => {
  const { t } = useLanguage();

  const plans = t.pricingPlans.plans.map((plan, index) => ({
    ...plan,
    isPopular: index === 1, // Keep the second plan as popular
  }));

  return (
    <section className="container pt-5 pricing-section">
      <h2 className="light__white__color mb-5 section__title">{t.pricingPlans.heading}</h2>
      <Row className="justify-content-center">
        {plans.map((plan, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className={`pricing-card h-100 ${plan.isPopular ? 'popular-card' : ''}`}>
              {plan.isPopular && <div className="popular-badge">{t.pricingPlans.mostPopular}</div>}
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="plan-name">{plan.name}</Card.Title>
                <div className="plan-price my-3">{plan.price}</div>
                <ul className="plan-features list-unstyled mb-4 flex-grow-1">
                  {plan.features.map((feature, i) => (
                    <li key={i}><span className="check-icon">✓</span> {feature}</li>
                  ))}
                </ul>
                <Button variant={plan.isPopular ? 'primary' : 'outline-light'} className="pricing-btn mt-auto w-100">
                  {t.pricingPlans.choosePlan}
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
