import React from "react";
import Navbar from "../../components/Navbar";
import MainBG from "../../components/MainBG";
import AboutComp from "../../components/AboutComp";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <MainBG
        title="About PIAIC"
        subtitle="Presidential Initiative for Artificial Intelligence and Computing (PIAIC)"
      />
      <AboutComp />
      <Footer />
    </>
  );
}

export default About;
