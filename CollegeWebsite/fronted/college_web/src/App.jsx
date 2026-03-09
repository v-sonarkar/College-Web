import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Tittle from "./Components/Tittle/Tittle";
import "./App.css";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <div className="container">
        <Tittle tittle="Our Programs" subtitle="What We Offer" />
        <Programs id="programs" />
        <About id="about" />
        <Tittle tittle="Gallery" subtitle="Campus Photos" />
        <Campus id="campus" />
        <Tittle tittle="Testimonials" subtitle="What Student Says" />
        <Testimonials id="testimonials" />
        <Tittle tittle="Contact Us" subtitle="Get in Touch" />
        <Contact id="contact" />
        <Footer/>
        
      </div>
      
    </div>
  );
};

export default App;
