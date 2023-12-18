import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

import products from "../data/products";

const Products = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!show);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="products">
      <Container>
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col lg={4} md={6} key={product.id}>
              <Fade in={show}>
                <Card className="my-2">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button href={product.link}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
