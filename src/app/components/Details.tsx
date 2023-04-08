import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

{
  /* @ts-expect-error Async Server Component */
}

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/w86v54uruq3d/entries?access_token=z4QbYhhNMAhOcwbarn6O1lxuE7nsiUrdrKDka8mmwHc&content_type=benefitsBlock`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Details() {
  const blogs = await getBlogs();
  return (
    <div className="w-10/12 m-auto my-16">
      {/* {blogs.items.map((item: any) => (
        <div key={item.id}>
          {item.fields.benefits.map((b: any) => (
            <div key={b.id}>
              {blogs.includes.Entry.map((a: any) => (
                <div key={a.id}>
                  {b.sys.id == a.sys.id ? (
                    <div>
                      <div key={a.id}>{a.fields.title}</div>
                      <div key={a.id}>{a.fields.description}</div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))} */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 border-b lg:border-b-0 lg:border-r border-gray-800 w-full md:w-10/12 mb-4 mr-auto">
          <h1 className="text-4xl text-black font-bold my-4 w-10/12">
            A One and Quarter Years Panaverse DAO
            <span className="text-slate-400"> Earn </span>
            as you
            <span className="text-slate-400"> Learn </span>
            Program
          </h1>
        </div>
        {blogs.items.map((item: any) => (
          <div
            key={item.id}
            className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 my-auto w-12/12 m-auto"
          >
            {item.fields.benefits.map((b: any) => (
              <div key={b.id}>
                {blogs.includes.Entry.map((a: any) => (
                  <div key={a.id}>
                    {b.sys.id == a.sys.id ? (
                      <div className="col-span-1 my-4 w-11/12 lg:w-10/12  lg:mx-auto flex flex-col gap-4">
                        <GlobeAltIcon className="w-8 h-8 text-slate-400" />
                        <p className="text-lg font-semibold w-6/12 leading-6">
                          {a.fields.title}
                        </p>
                        <p className="text-sm text-gray-400">
                          {a.fields.description}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
            {/* <div className="col-span-1 w-10/12 m-auto flex flex-col gap-4">
              <GlobeAltIcon className="w-8 h-8 text-slate-400" />
              <p className="text-lg font-semibold w-6/12 leading-6">
                Program of Studies
              </p>
              <p className="text-sm text-gray-400">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first three
                quarters are shared by all specialties and are dedicated to
                studying Object-Oriented Programming and cutting-edge Full-Stack
                Web 2.0 development.
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
