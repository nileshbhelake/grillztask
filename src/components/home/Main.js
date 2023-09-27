import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { Button, Grid, Input } from "@mui/material";
import Image from "react-bootstrap/Image";
import SearchComponent from "./SearchComponent";

const Main = () => {
  return (
    <>
      <Container fullWidth>
        <Grid container>
          <Grid xs={4} md={8}>
            <div>
              <Image src="\images\food watermark.svg" fluid />
              <div>
                <h1
                  style={{
                    color: "#2e266f",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Discover Restaurant <br />& Delicious Food
                </h1>
              </div>
            </div>
            <SearchComponent />

            {/* <form
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff8f8",
              }}
            >
              <input
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",

                  minWidth: "200px",
                  padding: 18,
                }}
                type="search"
                placeholder="Search reaturant,Food"
              />
              <Button
                style={{
                  backgroundColor: "#3d7475",
                  marginTop: 10,
                  padding: "10px 30px 10px 30px",
                  borderRadius: "50px 0 0 0 ",
                  color: "#fff",
                  fontSize: "1.5rem",
                }}
              >
                Go
              </Button>
            </form> */}
          </Grid>
          <Grid xs={4} md={4} style={{ position: "relative" }}>
            <Image src="\images\dots-bg3.svg" fluid fullWidth />

            <Image
              src="\images\Pngtree-delicious-food.png"
              fluid
              style={{
                position: "absolute",
                top: 80,
                left: 100,
                zIndex: 999,
              }}
            />
            <Image
              src="\images\pngtree—lettuce.png"
              fluid
              className="w-100"
              style={{
                position: "absolute",
                left: 110,
                top: -50,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
