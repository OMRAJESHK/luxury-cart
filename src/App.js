import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/modules/home/home";
import Preference from "./components/modules/preference/preference";
import ProductDetails from "./components/modules/productDetails/productDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="preference" element={<Preference />} />
      </Routes>
    </div>
  );
}

export default App;
