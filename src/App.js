import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import MenuOne from "./components/MenuOne";
import MenuThree from "./components/MenuThree";
import MenuTwo from "./components/MenuTwo";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu1" element={<MenuOne />} />
          <Route path="/menu3" element={<MenuThree />} />
          <Route path="/menu2" element={<MenuTwo />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
