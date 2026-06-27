"use client";

import React, { useEffect, useRef } from "react";
import socialIcons from "./../../SocialIcons/SocailIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Banner.css";
import { Button } from "react-bootstrap";
import Link from "next/link";

const Banner = () => {
  const typedRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    // Dynamically import typed.js on the client
    import("typed.js").then(({ default: Typed }) => {
      typedRef.current = new Typed(elRef.current, {
        strings: [
          "NeXt.Js Developer",
          "React.Js Developer",
          "Full Stack Developer",
          "Prisma ORM Developer",
          "Database Designer"
        ],
        typeSpeed: 150,
        backSpeed: 200,
        loop: true,
      });
    });

    return () => {
      // Cleanup on unmount
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container banner-section">
      <div className="row">
        <div className="col-md-6">
          <h5 className="light__green__color fw-400">Hello I'm </h5>
          <h1>Mohammed Asraf Uddin</h1>
          <h5>
            I'm a {" "}
            <span className="light__green__color fw-400">
              <span ref={elRef}></span>
            </span>
          </h5>
          <p className="py-3">
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local &amp; multinational Software/ IT
            agencies of Bangladesh and grow rapidly with increasing
            responsibilities.
          </p>
          <div>
            <Link href="/aboutme">
              <Button variant="success" className="mr-3">
                About Me
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-success">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>

      <div className="icons mt-4 mt-md-0">
        {socialIcons.map((icon) => (
          <a href={icon.link} key={icon.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={icon.icon}
              className={`${icon.className} icon`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
