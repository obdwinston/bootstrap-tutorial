import React from "react";

import Container from "react-bootstrap/Container";
import { Google, Facebook, Instagram, Twitter } from "react-bootstrap-icons";

import Contact from "./Contact";

const Footer = () => {
  return (
    <div>
      <Container>
        <hr />
        <Contact />
        <hr />
        <div className="icons">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <Google className="icon" color="grey" size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="icon" color="grey" size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="icon" color="grey" size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="icon" color="grey" size={30} />
          </a>
        </div>
        <p className="text-center text-muted">&copy; 2023 Business, Inc.</p>
      </Container>
    </div>
  );
};

export default Footer;
