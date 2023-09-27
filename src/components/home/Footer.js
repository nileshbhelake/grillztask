import React from "react";
import "./Footer.css";
import { Card, Container, Paper, Grid, Input, Button } from "@mui/material";
import Image from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = (props) => {
  const navigation = useNavigate();

  return (
    <>
      <Container fullWidth>
        <Paper>
          <Card>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid md={3} xs={3} className="Fimage">
                <Image src={props.image} fluid className="footerImg" />
              </Grid>
              <Grid md={7} xs={7}>
                <div>
                  <h2 className="Fcontent">{props.title}</h2>
                  <h2 className="Fcontent">{props.title1}</h2>
                  <p className="Fcontent">{props.content}</p>
                  <h1 className="Fcontent">
                    <InputGroup className="mb-5">
                      <Form.Control
                        style={{ height: 50, marginTop: 20 }}
                        placeholder="E-mail"
                        aria-label="Recipient's username"
                        // aria-describedby="basic-addon2"
                      />
                      <Button variant="contained-warning" id="button-addon2">
                        <Button onClick={() => navigation("/menu1")}>
                          <Image
                            src="/images/arrow.svg"
                            fluid
                            style={{ height: 60 }}
                          />
                        </Button>
                      </Button>
                    </InputGroup>
                  </h1>
                  <div className="mainlink">
                    <Link className="Flink" to="/">
                      {props.product}
                    </Link>
                    <Link className="Flink" to="/menu1">
                      {props.company}
                    </Link>
                    <Link className="Flink" to="/menu2">
                      {props.learnmore}
                    </Link>
                    <Link className="Flink" to="/menu3">
                      {props.getintouch}
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid md={2}>
                <div>
                  <img src="/images/lin.svg" className="in" />
                  <img src="/images/lin.svg" className="in" />
                  <img src="/images/lin.svg" className="in" />
                  <p style={{ fontSize: 10 }}>@ 2022 Techvers World</p>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Container>
    </>
  );
};

export default Footer;
