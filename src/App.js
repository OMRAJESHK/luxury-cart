import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/modules/productDetails";
import Home from "./components/modules/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
