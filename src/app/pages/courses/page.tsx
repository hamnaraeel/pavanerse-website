import CommonSyllabus from "@/app/components/CommonSyllabus";
import CourseDetail from "@/app/components/CourseDetail";
import Footer from "@/app/components/Footer";
import MainBG from "@/app/components/MainBG";
import Navbar from "@/app/components/Navbar";
import CoursesComp from "@/app/components/CoursesComp";

import React from "react";

function Courses() {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <Navbar />
      <MainBG title="Courses" subtitle="" />
      {/* @ts-expect-error Async Server Component */}

      <CommonSyllabus />
      <CourseDetail />
      {/* @ts-expect-error Async Server Component */}

      <CoursesComp />
      <Footer />
    </>
  );
}

export default Courses;
