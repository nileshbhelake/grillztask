import { Button, Card, Container, Grid } from "@mui/material";
import React from "react";
import "./AdvancedBookig.css";

const AdvancedBooking = () => {
  return (
    <>
      <Container
        className="abcontainer"
        sx={{ mt: 20, backgroundColor: "#fafafa" }}
      >
        <Container>
          <div className="ABform  ">
            <p
              style={{
                textAlign: "center",
              }}
            >
              <h1 className="abheading">Advanced Booking</h1>
              <br />
              <div
                className="inputdiv"
                style={{
                  backgroundColor: "#fff",
                  display: "inline-block",
                  padding: "10px 20px 10px 20px ",
                  borderRadius: 10,
                  boxShadow: "0 0  25px  5px pink",
                  marginBottom: 20,
                }}
              >
                <input
                  type="search"
                  placeholder="Search Here"
                  className="input"
                />
                <span>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#3d7475" }}
                  >
                    Go
                  </Button>
                </span>
              </div>
              <div>
                <label className="ablabel">Date</label>

                <input
                  type="date"
                  placeholder="19/05/2023"
                  className="abinput"
                />

                <label className="ablabel">Time</label>
                <input type="time" placeholder="09:00 Am" className="abinput" />
                <label className="ablabel">Guest</label>

                <input type="number" placeholder="2" className="abinput" />
              </div>
            </p>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default AdvancedBooking;
