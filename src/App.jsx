import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import HowTo from "../pages/HowTo";
import About from "../pages/About";


const App = () => {
  return (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tutorial" element={<HowTo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;