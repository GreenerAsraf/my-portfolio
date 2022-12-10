import React from "react";
import { Link } from "react-router-dom";

const GetInTouchHome = () => {
  return (
    <section className="container">
      <p className="light__green__color text-center">What's Next?</p>
      <h1 className="light__white__color text-center">Get In Touch</h1>
      <p className="light__white__color text-center col-md-8 mx-auto">
        I'd Love to hear from you . Whether you have a question or just want to
        say hi, fell free to drop a message. I'll try my best to get back to
        you!
      </p>
      <div className="d-flex justify-content-center ">
        <Link to="/contact">
          <button className="btn btn-outline-success mt-4">Say Hello</button>
        </Link>
      </div>
    </section>
  );
};

export default GetInTouchHome;
