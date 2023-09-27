import { Button, Container, Paper } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./CardSection.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  {
    path: "./images/the-wonton.png",
  },
  {
    path: "./images/fire-water.png",
  },
  {
    path: "./images/fire-water.png",
  },
  {
    path: "./images/fire-water.png",
  },
  {
    path: "./images/fire-water.png",
  },
  {
    path: "./images/fire-water.png",
  },
  {
    path: "./images/fire-water.png",
  },
];
const CardSection = () => {
  return (
    <>
      <Container style={{ marginTop: 50 }} className="container1">
        <Card style={{ padding: 10 }}>
          <h3 style={{ alignSelf: "flex-end" }}>
            See More <Image src="images/arrow2.svg" fluid className="seemore" />
          </h3>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {images.map((item) => (
              <Card className="parenthidden">
                <Image src={item.path} fluid className="image" />
                <div className="hidden">
                  <h2>Fire Water</h2>
                  <p>lorem lorem lorem lorem lorem </p>
                  <div className="hiddenBottm">
                    <p>Mumbai city</p>
                    <Button variant="contained">
                      Book Now
                      <Image
                        src="images/arrow2.svg"
                        fluid
                        className="seemorebutton"
                      />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </Carousel>
        </Card>
      </Container>
    </>
  );
};

export default CardSection;
