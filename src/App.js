import React from "react";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Heaser from "./components/header/Heaser";
import Nav from "./components/nav/Nav";
import Experiance from "./components/experiance/Experiance";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimoniuals from "./components/testimonials/Testimoniuals";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Heaser />
      <Nav />
      <About />
      <Experiance />
      <Service />
      <Portfolio />
      <Testimoniuals />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
