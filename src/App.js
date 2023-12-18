import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
