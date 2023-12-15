import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const images = [
  {
    id: 1,
    image: require("../assets/images/image-1.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#pricing",
  },
  {
    id: 2,
    image: require("../assets/images/image-2.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#pricing",
  },
  {
    id: 2,
    image: require("../assets/images/image-3.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#pricing",
  },
];

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel className="mb-2">
              {images.map((image) => (
                <Carousel.Item>
                  <Image src={image.image} />
                  <Carousel.Caption className="carousel-caption">
                    <h2 className="carousel-title">{image.title}</h2>
                    <p className="carousel-text">{image.text}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          {images.map((image) => (
            <Col md={4}>
              <Card className="my-2">
                <Card.Img variant="top" src={image.image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" href={image.link}>
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
