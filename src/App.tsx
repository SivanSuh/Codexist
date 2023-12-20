import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailCard from "./pages/DetailCard";
import Basket from "./pages/Basket";

const App = () => {
  return (
    <>
      <Navbar />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default App;
