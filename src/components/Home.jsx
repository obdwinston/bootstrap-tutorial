import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

const images = [
  {
    id: 1,
    image: require("../assets/images/image-1.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
  {
    id: 2,
    image: require("../assets/images/image-2.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
  {
    id: 3,
    image: require("../assets/images/image-3.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
  {
    id: 4,
    image: require("../assets/images/image-4.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
  {
    id: 5,
    image: require("../assets/images/image-5.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
  {
    id: 6,
    image: require("../assets/images/image-6.jpg"),
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#home",
  },
];

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!show);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="home">
      <Container>
        <Carousel className="mt-5 mb-2">
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <Image src={image.image} />
              <Carousel.Caption className="carousel-caption">
                <h2 className="carousel-title">{image.title}</h2>
                <p className="carousel-text">{image.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <Row className="justify-content-center">
          {images.map((image) => (
            <Col lg={4} md={6} key={image.id}>
              <Fade in={show}>
                <Card className="my-2">
                  <Card.Img variant="top" src={image.image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button href={image.link}>Go somewhere</Button>
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

export default Home;
