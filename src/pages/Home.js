import React from "react";
import AboutUs from "../componentes/homepage/AboutUs";
import Slider2 from "../componentes/homepage/Slider2";
import Slider3 from "../componentes/homepage/Slider3";
import Investor from "../componentes/homepage/Investor";
import Poster from "../componentes/homepage/Poster";
import Footer from "../componentes/homepage/Footer";
import Slider1 from "../componentes/homepage/Slider1";
import Home1 from "../componentes/homepage/Home1";

function Home() {
  return (
    <div>
      <Home1 />
      <Slider1 />
      <AboutUs />
      <Slider2 />
      <Slider3 />
      <Investor />
      <Poster />
      <Footer />
    </div>
  );
}

export default Home;
