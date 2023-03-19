import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <div className="">
      <div className="bg-black text-white w-12/12 flex h-screen overflow-hidden">
        <div className="w-10/12 mx-auto flex justify-between">
          <div className="w-9/12 md:w-6/12 flex flex-col my-auto">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase font-semibold">
                Certified Web 3.0 and Metaverse Developer
              </p>
              <h1 className="text-6xl font-bold w-10/12">
                Explore New Era of Internet
              </h1>
              <p className="text-sm w-9/12 text-gray-300">
                Getting Ready for the Next Generation and Future of the Internet
                - Join a 13 Trillion Dollar Industry with 5 Billion Users
              </p>
            </div>
            <div className="flex gap-4 my-4">
              <button className="text-black font-medium text-sm bg-slate-400 py-3 px-8 rounded-lg">
                Start Learning
              </button>
              <button className="text-white font-medium text-sm bg-black border py-3 px-8 rounded-lg">
                Try Demo
              </button>
            </div>
          </div>
          <div className="w-3/12 md:w-5/12">
            <div className="grid grid-cols-1 lg:grid-cols-2 flex gap-6">
              <div className="col-span-1 mt-2 flex flex-col gap-6">
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/blockchain.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />

                <Image
                  className="rounded-lg object-fit"
                  src="/asset/metapink.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/ai.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/metaWorld.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/ai.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/meta2.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/ai2.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="col-span-1 mt-4 flex flex-col gap-6">
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/cloud.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/face.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/images.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/iot.webp"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/blocks.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/meta.jpeg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-lg object-fit"
                  src="/asset/iot.jpg"
                  alt="My Image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
