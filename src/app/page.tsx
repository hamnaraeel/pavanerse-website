import React from "react";
import Courses from "./components/CoursesComp";
import Details from "./components/Details";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Details />
      <Courses />
      <Instructor />
      <Footer />
    </>
  );
}

export default Home;
