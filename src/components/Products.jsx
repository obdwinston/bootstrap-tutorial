import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

import products from "../data/products";

const Products = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const count = 6; // number of items per page
  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / count); i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === page}
        onClick={() => setPage(i)}
        href="#products"
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    let lastItem =
      page === Math.ceil(products.length / count)
        ? products.length
        : page * count;

    let itemsArray = [];
    for (let i = (page - 1) * count; i < lastItem; i++) {
      itemsArray.push(products[i]);
    }
    setItems(itemsArray);
  }, [page]);

  return (
    <div id="products">
      <Container>
        <Row className="justify-content-center">
          {items.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <Card className="my-2">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title className="text-truncate">Card Title</Card.Title>
                  <Card.Text className="text-truncate">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href={item.link}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Pagination className="products-pagination">{pages}</Pagination>
      </Container>
    </div>
  );
};

export default Products;
