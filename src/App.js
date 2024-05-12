import { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonial/Testimonial";
import Videos from "./Components/Videos/Videos";

function App() {
  const [playState, setPlayState]=useState(false);

  return (
    <div className="main-container">
    <Navigation/>
    <Hero/>
    <Program />
    <About setPlayState={setPlayState}/>
    <Gallery/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Videos playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
