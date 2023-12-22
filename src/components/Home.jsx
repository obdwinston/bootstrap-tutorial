import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import products from "../data/products";

const Home = () => {
  const count = 5; // number of latest items

  return (
    <div id="home">
      <Container>
        <Carousel className="mt-5 mb-2">
          {products.slice(0, count).map((product) => (
            <Carousel.Item key={product.id}>
              <Image src={product.image} />
              <Carousel.Caption className="carousel-caption">
                <h2 className="carousel-title text-truncate">
                  {product.title}
                </h2>
                <p className="carousel-text text-truncate">{product.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
