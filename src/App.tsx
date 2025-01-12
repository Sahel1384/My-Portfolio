import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Video from "./Components/Video/Video";
import Footer from "./Components/Footer/Footer";
import Motion from "./Components/Motion/Motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
      easing: "ease-in-out", // Define the easing for the animation
    });
  }, []);
  return (
    <div className="bg-body overflow-hidden">
      <Navbar />
      <Hero />
      <Video />
      <Services />
      <Projects />
      <Footer />
      <Motion />
    </div>
  );
}

export default App;
