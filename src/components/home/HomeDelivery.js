import { Card, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import "./HomeDelivery.css";
import Image from "react-bootstrap/esm/Image";

const HomeDelivery = (props) => {
  return (
    <>
      <Container className="HDContainer" sx={{ mt: 10 }}>
        <Grid container sx={{ mb: 10 }}>
          <Grid item md={6}>
            <Grid container>
              <Grid md={6} xs={6} sx={{ mb: 10 }}>
                <Link href="/menu1">
                  <h1 className="content">
                    <Image src={props.tableImg} fluid className="HDimage" />
                  </h1>
                </Link>
              </Grid>
              <Grid md={6} xs={6}>
                <Typography>
                  <h3 className="content">{props.title}</h3>
                  <Image src="images/arrow2.svg" fluid className="arrowLeft" />

                  <p className="content">{props.content}</p>
                </Typography>
              </Grid>
              <Grid md={6} xs={6}>
                <Typography>
                  <h3 className="content">{props.title1}</h3>
                  <p>{props.content1}</p>
                  <Image src="images/arrow2.svg" fluid className="arrowRight" />
                </Typography>
              </Grid>
              <Grid md={6} xs={6}>
                <Link href="/menu1">
                  <h1 className="content">
                    <Image src={props.plateImg} fluid className="HDimage" />
                  </h1>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} style={{ backgroundColor: "#fafafa" }}>
            <Link href="/menu1">
              <h1 className="content">
                <Image src={props.image} fluid className="HDimage" />
              </h1>
            </Link>
            <h3 className="content">{props.hdtilte}</h3>
            <p className="content">{props.content}</p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeDelivery;
