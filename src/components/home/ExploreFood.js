import { Container, Paper } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
import "./Explore.css";
const Food = [
  {
    id: 1,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
  {
    id: 2,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
  {
    id: 3,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
  {
    id: 4,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
  {
    id: 5,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
  {
    id: 6,
    image: "/images/ham-sandwich.png",
    title: "Ham Sandwitch",
    price: "$10.50",
    descriptipn: "managed by its own audience, ",
  },
];

const ExploreFood = () => {
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Paper elevation={0}>
          <div className="heading">
            <h5
              // style={{ textAlign: "center", color: "#2e266f" }}
              className="heading1"
            >
              Explore Our Foods
            </h5>
            <p
              className="heading2"
              //  style={{ textAlign: "center" }}
            >
              managed by its own audience, using a web browser. A typical wiki
              <br />
              contains multiple pages for the subjects or
            </p>
          </div>
        </Paper>
        <Paper className="Econtainer" elevation={0}>
          {Array.isArray(Food) &&
            Food.map((item, i) => (
              <Card style={{ width: "20rem", margin: 10 }}>
                <Card.Body>
                  <Card.Text>
                    <Image src={item.image} fluid className="EImage" />
                  </Card.Text>

                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Link className="Link" href="#">
                    {item.title}
                  </Card.Link>
                  <Card.Link href="#" className="Link">
                    {item.price}
                  </Card.Link>
                  <Card.Title className="title">
                    <p>{item.descriptipn}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
        </Paper>
      </Container>
    </>
  );
};

export default ExploreFood;
