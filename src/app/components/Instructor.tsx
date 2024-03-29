import React from "react";
import Image from "next/image";

function Instructor() {
  return (
    <div>
      <div className="w-10/12 m-auto py-16">
        <div className="flex md:flex-row flex-col  justify-start">
          <div className="w-full md:w-5/12 lg:w-6/12 mb-4">
            <div className="flex flex-wrap w-8/12 md:w-10/12 lg:w-6/12 xl:w-5/12 justify-center items-center grid gap-6 grid-cols-4 w-full m-auto ">
              <div className="rounded-full m-auto  shadow-inst border border-1 border-fuchsia-500 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zia.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-red-300">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/adil.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-blue-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/daniyal.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-green-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zeeshan.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-teal-600">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/hirakhan.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 border-fuchsia-500 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zia.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-red-300">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/adil.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-blue-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/daniyal.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-green-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zeeshan.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-teal-600">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/hirakhan.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 border-fuchsia-500 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zia.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-red-300">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/adil.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-blue-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/daniyal.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1  border-green-300 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zeeshan.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 w-10 h-10 border-teal-600">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/hirakhan.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-full m-auto shadow-inst border border-1 border-fuchsia-500 w-10 h-10">
                <Image
                  className="rounded-full object-fit"
                  src="/asset/instructor/zia.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-7/12 lg:w-5/12 my-auto flex flex-col items-start gap-4">
            <h1 className="text-4xl w-8/12 text-black font-bold w-10/12">
              Experienced Course Mentor
            </h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
              modi, architecto nemo iusto natus! Ex alias perspiciatis fugit
              veniam voluptatum aut quaerat vitae sunt!
            </p>
            <button className="text-black font-medium text-sm bg-slate-400 py-3 px-8 rounded-lg">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
