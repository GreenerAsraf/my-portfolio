import React from "react";
import { Form } from "react-bootstrap";
import "./ContactPage.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_kz1c6uq",
        e.target,
        "user_iikwQ68Hfk6KErZFZNy0o"
      )
      .then(
        (result) => {
          alert(
            "Thanks for your message. We will replay you as soon as possibale"
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
        <h2 className="light__white__color text-center mb-4">Get In Touch</h2>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Your Name"
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your Message"
              name="message"
              required
            />
          </Form.Group>
          <input type="submit" className="btn btn-success" value="Send" />
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
