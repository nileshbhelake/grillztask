import { Card, Container, Grid, Paper } from "@mui/material";
import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./ExcitingDeals.css";

const ExcitingDeals = (props) => {
  return (
    <>
      <Container sx={{ mt: 20, position: "relative" }}>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div>
                <div>
                  <h1
                    style={{
                      borderLeft: "15px solid #2e266f",
                      color: "#2e266f",

                      fontWeight: "bold",
                      padding: "10px",
                    }}
                  >
                    {props.heading}
                  </h1>
                  <p style={{ padding: 10 }}>{props.content}</p>
                  <div>
                    <span>
                      <Image
                        src={props.googleImg}
                        fluid
                        className="googleImg"
                      />
                    </span>
                    <span>
                      <Image src={props.appleImg} fluid className="googleImg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <Image
                src={props.dotImg}
                fluid
                className="align-middle"
                style={{ marginBottom: -500 }}
              />
              <Image src={props.vgeImg} fluid />
              <Image src={props.mobileImg} style={{ marginTop: -700 }} fluid />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExcitingDeals;
