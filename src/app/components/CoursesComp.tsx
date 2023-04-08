{
  /* @ts-expect-error Async Server Component */
}
import React from "react";
import {
  ArrowRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/w86v54uruq3d/environments/master/entries?access_token=z4QbYhhNMAhOcwbarn6O1lxuE7nsiUrdrKDka8mmwHc&content_type=exploreCourses`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Courses() {
  const blogs = await getBlogs();

  return (
    <div className="bg-black">
      <div className="w-10/12 m-auto py-16 bg-black">
        {blogs.items.map((item: any) => (
          <div key={item.id}>
            <div className=" flex flex-col md:flex-row md:justify-between md:items-end">
              <h1 className="text-5xl uppercase text-white font-bold my-4 w-4/12">
                {item.fields.title}
              </h1>
              <div className="flex gap-2 pb-3 items-center animate-pulse ml-auto md:ml-0">
                <a href="" className="text-white underline underline-offset-4">
                  View All
                </a>
                <ChevronDoubleRightIcon className=" text-white w-4 " />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
              {item.fields.courses.map((course: any) => (
                <div
                  key={course.id}
                  className="relative col-span-1 hover:scale-120 hover:z-50 w-full h-60 bg-no-repeat bg-cover"
                >
                  {blogs.includes.Entry.map((a: any) => (
                    <div key={a.id}>
                      {course.sys.id == a.sys.id ? (
                        <div>
                          {blogs.includes.Asset.map((img: any) => (
                            <div key={img.id}>
                              {a.fields.image.sys.id == img.sys.id ? (
                                <div
                                  style={{
                                    backgroundImage: `url(https:${img.fields.file.url})`,
                                    backgroundRepeat: "no-repeat",
                                  }}
                                  className="relative hover:scale-125 hover:z-50 w-full bg-[url('/asset/meta2.jpeg')] h-60 bg-no-repeat bg-cover"
                                >
                                  <div className="absolute bottom-3 left-4 right-4">
                                    <h1 className="text-white uppercase font-bold text-lg">
                                      {a.fields.title}
                                    </h1>
                                    <h4 className="text-gray-100 font-normal text-md mt-2">
                                      {a.fields.description}
                                    </h4>
                                  </div>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* <div className="">
          <div className="w-10/12 m-auto py-16 bg-black">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end"></div>
            <h1 className="text-5xl uppercase text-white font-bold my-4 w-4/12">
              Explore our <br /> courses
            </h1>
            <div className="flex gap-2 pb-3 items-center animate-pulse ml-auto md:ml-0">
              <a href="" className="text-white underline underline-offset-4">
                View All
              </a>
              <ChevronDoubleRightIcon className=" text-white w-4 " />
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
        </div> */}
      </div>
    </div>
  );
}

export default Courses;
