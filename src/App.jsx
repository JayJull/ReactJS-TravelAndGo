import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Support from "./components/Support/Support";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Lounge from "./components/Lounge/Lounge";
import Search from "./components/Search/Search";
import Travelers from "./components/Travelers/Travelers";
import Subscribe from "./components/Subscribe/Subscribe";
import Info from "./components/Info/Info";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App;