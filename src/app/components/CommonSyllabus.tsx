import React from "react";

function CommonSyllabus() {
  return (
    <div className="bg-black">
      <div className=" w-10/12 m-auto py-16 flex flex-col gap-4">
        <h1 className="text-5xl text-white font-bold uppercase text-center">
          Common In All
        </h1>
        <p className="sentence text-center w-7/12 m-auto font-medium text-white">
          Every participant of the program will start by completing the
          following three core courses:
        </p>
        <div className="grid grid-col-1 w-10/12 mx-auto sm:grid-cols-2 lg:grid-cols-3 flex mt-4 gap-6 ">
          <div className="col-span-1 p-8 bg-[url('/asset/bg2.jpg')] bg-black rounded-lg">
            <h1 className="text-2xl pb-4 text-white font-bold uppercase text-start">
              Quarter I (Core)
            </h1>
            <p className="text-md font-medium text-white">
              CS-101: Object-Oriented Programming using TypeScript
            </p>
          </div>
          <div className="col-span-1 p-8 bg-black bg-[url('/asset/bg2.jpg')]  rounded-lg">
            <h1 className="text-2xl pb-4 text-white font-bold uppercase text-start">
              Quarter II (Core)
            </h1>
            <p className="text-md font-medium text-white">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
              Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
            </p>
          </div>
          <div className="col-span-1 p-8 bg-black bg-[url('/asset/bg2.jpg')] rounded-lg">
            <h1 className="text-2xl pb-4 text-white font-bold uppercase text-start">
              Quarter III (Core)
            </h1>
            <p className="text-md font-medium text-white">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Developmen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonSyllabus;
