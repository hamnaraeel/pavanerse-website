import React from "react";
import {
  ArrowRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
function Courses() {
  return (
    <div>
      <div className="bg-black">
        <div className="w-10/12 m-auto py-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <h1 className="text-5xl uppercase text-white font-bold my-4 w-10/12">
              Explore Our
              <br />
              Courses
            </h1>
            <div className="flex gap-2 pb-3 items-center animate-pulse ml-auto md:ml-0">
              <a href="" className="text-white underline underline-offset-4">
                View All
              </a>
              <ChevronDoubleRightIcon className=" text-white w-4 " />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
              <div className="relative col-span-1 hover:scale-125 hover:z-50 w-full bg-[url('/asset/meta2.jpeg')] h-60 bg-no-repeat bg-cover">
                <div className="absolute bottom-3 left-4 right-4">
                  <h1 className="text-white uppercase font-bold text-lg">
                    Web 3.0 (Blockchain) and Metaverse Specialization
                  </h1>
                  <h4 className="text-gray-100 font-normal text-md mt-2">
                    52 Classes
                  </h4>
                </div>
              </div>
              <div className="relative col-span-1 hover:scale-125 hover:z-50 w-full bg-[url('/asset/ai.webp')] h-60 bg-no-repeat bg-cover">
                <div className="absolute bottom-3 left-4 right-4">
                  <h1 className="text-white uppercase font-bold text-lg">
                    Artificial Intelligence (AI) and Deep Learning
                    Specialization
                  </h1>
                  <h4 className="text-gray-100 font-normal text-md mt-2">
                    52 Classes
                  </h4>
                </div>
              </div>
              <div className="relative col-span-1 hover:scale-125 hover:z-50 w-full bg-[url('/asset/cloud.jpeg')] h-60 bg-no-repeat bg-cover">
                <div className="absolute bottom-3 left-4 right-4">
                  <h1 className="text-white uppercase font-bold text-lg">
                    Cloud-Native Computing Specialization
                  </h1>
                  <h4 className="text-gray-100 font-normal text-md mt-2">
                    52 Classes
                  </h4>
                </div>
              </div>
              <div className="relative col-span-1 hover:scale-125 hover:z-50 w-full bg-[url('/asset/iot.webp')] h-60 bg-no-repeat bg-cover">
                <div className="absolute bottom-3 left-4 right-4">
                  <h1 className="text-white uppercase font-bold text-lg">
                    Ambient Computing and IoT Specialization
                  </h1>
                  <h4 className="text-gray-100 font-normal text-md mt-2">
                    52 Classes
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
