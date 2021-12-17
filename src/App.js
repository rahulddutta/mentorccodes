import React from "react";
import Home from "./components/pages/Home/Home";
import Whycoding from "./components/pages/whyCoding/Whycoding";
import Topbar from "./components/topbar/Topbar"
import WhyMentor from "./components/pages/whyMentor/WhyMentor"
import Pricing from "./components/pages/pricing/Pricing"
import Question from "./components/pages/question/Question"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Topbar />
      <Home />
      <Whycoding />
      <WhyMentor />
      <Pricing />
      <Question />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
