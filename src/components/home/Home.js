import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Header from "./Header";
import Main from "./Main";
import BottomPart from "./BottomPart";
import CardSection from "./CardSection";
import Aside from "./Aside";
import AdvancedBooking from "./AdvancedBooking";
import HomeDelivery from "./HomeDelivery";
import ExploreFood from "./ExploreFood";
import ExcitingDeals from "./ExcitingDeals";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Container fullWidth>
        <Paper>
          <Grid container>
            <Grid item xs={9} md={9}>
              <Header />
              <Main />
            </Grid>
            <Grid item xs={3} md={3} style={{ backgroundColor: "#3d7475" }}>
              <Aside />
            </Grid>
          </Grid>
          <BottomPart
            title="some top restaurant for 
              dining out or in !"
            content="managed by its own audience, using a web browser. A typical wiki contains multiple pages for the subjects or scope of the project, and could be either open to the public or limited to use within an organization for maintaining its internal knowledge base. Wikis are"
          />
          <CardSection />
          <AdvancedBooking />
          <BottomPart
            title="Our 
             Services"
            content="managed by its own audience, using a web browser. A typical wiki contains multiple pages for the subjects or scope of the project, and could be either open to the public or limited to use within an organization for maintaining its internal knowledge base. Wikis are"
          />
          <HomeDelivery
            title="Advanced Table Booking"
            title1="Food for Free 24/7"
            hdtilte="free home delivery 
            at your door step"
            image="/images/free-home-delivery-at-your-door-steps.svg"
            tableImg="/images/advanced-table-booking.svg"
            plateImg="/images/advanced-table-booking.svg"
            content="managed by its own audience, using a web browser. A
                      typical wiki contains multiple pages for the subjects or"
            content1=" managed by its own audience, using a web browser. A
                      typical wiki contains multiple pages for the subjects or"
          />
          <ExploreFood />
          <ExcitingDeals
            heading="Download app for Exciting Deals"
            content="managed by its own audience, using a web browser. A
                      typical wiki contains multiple pages for the subjects or"
            googleImg="/images/App_Store_Badge.png"
            appleImg="/images/App_Store_Badge.png"
            dotImg="/images/dots-bg3.svg"
            vgeImg="/images/1cauliflower.png"
            mobileImg="/images/app-screen.png"
          />
          <Footer
            image="/images/footer-leaf.png"
            title="Get Notified"
            title1="about new amazing products"
            content="managed by its own audience, using a web browser. A
            typical wiki contains multiple pages for the subjects or"
            product="product"
            company="company"
            learnmore="Learn More"
            getintouch="Get in touch"
          />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
