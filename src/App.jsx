import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Booking from "../pages/Booking";


const App = () => {
  return (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;