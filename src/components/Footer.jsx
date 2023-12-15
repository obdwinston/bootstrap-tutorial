import React from "react";

import Container from "react-bootstrap/Container";
import { Google, Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div>
      <Container>
        <hr />
        <div className="icons">
          <a target="_blank" href="https://google.com">
            <Google className="icon" color="grey" size={30} />
          </a>
          <a target="_blank" href="https://facebook.com">
            <Facebook className="icon" color="grey" size={30} />
          </a>
          <a target="_blank" href="https://instagram.com">
            <Instagram className="icon" color="grey" size={30} />
          </a>
          <a target="_blank" href="https://twitter.com">
            <Twitter className="icon" color="grey" size={30} />
          </a>
        </div>
        <p className="text-center text-muted">&copy; 2023 Business, Inc.</p>
      </Container>
    </div>
  );
};

export default Footer;
