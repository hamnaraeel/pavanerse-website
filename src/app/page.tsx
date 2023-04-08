// {
//   /* @ts-expect-error Async Server Component */
// }
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// const inter = Inter({ subsets: ["latin"] });

// async function getBlogs() {
//   const res = await fetch(
//     `https://cdn.contentful.com/spaces/w86v54uruq3d/environments/master/entries?access_token=z4QbYhhNMAhOcwbarn6O1lxuE7nsiUrdrKDka8mmwHc&content_type=mainPage`,
//     { cache: "no-store" }
//   );

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     // throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

import fs from "fs";
import React from "react";
import Courses from "./components/CoursesComp";
import Details from "./components/Details";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";

async function Home() {
  // const blogs = await getBlogs();
  // return (
  //   <div>
  // {blogs.items.map((item: any) => (
  //   <>
  //     <div className="text-black">{item.fields.title}</div>
  //     {/* <div>{documentToReactComponents(item.fields.description)}</div>
  //     <div>
  //       {blogs.includes.Asset.map((a: any) => (
  //         <div key={a.id}>
  //           {item.fields.picture.sys.id == a.sys.id ? (
  //             <Image
  //               src={"https:" + a.fields.file.url}
  //               alt=""
  //               width="100"
  //               height="100"
  //             />
  //           ) : (
  //             <div></div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //     <div>
  //       {blogs.includes.Entry.map((entry: any) => (
  //         <div key={entry.id}>
  //           {item.fields.creator.sys.id == entry.sys.id ? (
  //             <div>Author: {entry.fields.name}</div>
  //           ) : (
  //             <div></div>
  //           )}
  //         </div>
  //       ))}
  //     </div> */}
  //     <br />
  //     <br />
  //     <br />
  //   </>
  // ))}
  //   </div>
  // );
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
