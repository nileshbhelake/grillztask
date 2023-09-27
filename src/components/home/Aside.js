import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./Aside.css";
const Aside = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            className="aside-image"
            fluid
            src="\images\WhatsApp Image 2023-09-26 at 14.14.15.jpg"
          />
        </div>
        <form>
          <select className="select" style={{}}>
            User
            <option>User</option>
            <option>ksfkslk</option>
            <option>ksfkslk</option>
            <option>ksfkslk</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default Aside;
