"use client";

import React from "react";
import { Form } from "react-bootstrap";
import "./ContactPage.css";
import emailjs from "emailjs-com";

import { useLanguage } from "../LanguageProvider/LanguageProvider";

const ContactPage = () => {
  const { t } = useLanguage();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0jbxlu6",
        "template_gjnsofi",
        e.target,
        "rHtvBbZ_lbS3OjOIH"
      )
      .then(
        (result) => {
          alert(
            t.contact.successMsg || "Thanks for your message. We will replay you as soon as possibale"
          );
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="container mt-5">
      <div className="col-md-6 mx-auto contact__form p-3 rounded px-4">
        <h2 className="light__white__color text-center mb-4">{t.contact.label}</h2>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="contactName">
            <Form.Control
              type="text"
              placeholder={t.contact.nameLabel}
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="contactEmail">
            <Form.Control
              type="email"
              placeholder={t.contact.emailLabel}
              name="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="contactMessage">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={t.contact.messageLabel}
              name="message"
              required
            />
          </Form.Group>
          <input type="submit" className="btn btn-success" value={t.contact.sendBtn || "Send"} />
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
