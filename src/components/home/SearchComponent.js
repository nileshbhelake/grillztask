import React from "react";
import { Button } from "@mui/material";
import "./Search.css";

const SearchComponent = ({ item }) => {
  return (
    <>
      <form className="form">
        <input
          className="input"
          type="search"
          placeholder="Search reaturant,Food"
        />
        <Button
          onClick={item}
          style={{
            backgroundColor: "#3d7475",
            marginTop: 9,
            padding: "10px 30px 10px 30px",
            borderRadius: "50px 0 0 0 ",
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          Go
        </Button>
      </form>
    </>
  );
};

export default SearchComponent;
