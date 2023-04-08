import React from "react";
{
  /* @ts-expect-error Async Server Component */
}
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=about`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function About() {
  const blogs = await getBlogs();
  // return (
  //   <div>
  //     {blogs.items.map((item: any) => (
  //       <>
  //         <div className="text-black">{item.fields.description}</div>
  //         <div>
  //           {blogs.includes.Asset.map((a: any) => (
  //             <div key={a.id}>
  //               {item.fields.image.sys.id == a.sys.id ? (

  //               ) : (

  //               )}
  //             </div>
  //           ))}
  //         </div>
  //         {/* <div>{documentToReactComponents(item.fields.description)}</div>

  //         <div>
  //           {blogs.includes.Entry.map((entry: any) => (
  //             <div key={entry.id}>
  //               {item.fields.creator.sys.id == entry.sys.id ? (
  //                 <div>Author: {entry.fields.name}</div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </div>
  //           ))}
  //         </div> */}
  //         {/* <br />
  //         <br />
  //         <br /> */}
  //       </>
  //     ))}
  //   </div>
  // );
  return (
    <>
      {blogs.items.map((item: any) => (
        <div
          key={item.id}
          className="bg-white w-10/12 m-auto flex flex-col justify-center items-center gap-8 py-16"
        >
          {blogs.includes.Asset.map((a: any) => (
            <div key={a.id}>
              {item.fields.image.sys.id == a.sys.id ? (
                <Image
                  className=" object-fit"
                  src={"https:" + a.fields.file.url}
                  alt="My Image"
                  width={500}
                  height={500}
                />
              ) : (
                <div></div>
              )}
            </div>
          ))}

          <div className="w-10/12 m-auto">
            <p className="text-gray-500 ">{item.fields.description}</p>
          </div>

          {item.fields.instructor.map((instr: any) => {
            {
              <div>
                {/* blogs.includes.Entry.map((a: any) => (
                <div key={a.id}>
                  {instr.sys.id == a.sys.id ? (
                    // <Image
                    //   className=" object-fit"
                    //   src={"https:" + a.fields.file.url}
                    //   alt="My Image"
                    //   width={500}
                    //   height={500}
                    // />

                    <div>{a.fields.name}</div>
                  ) : (
                    <div></div>
                  )}
                
                </div>
              )); */}
                <p className="text-gray-500 ">{item.fields.description}</p>

                <div className="text-black">{instr.sys.id}</div>
              </div>;
            }
          })}
        </div>
      ))}

      {blogs.items.map((item: any) => (
        <div key={item.id}>
          {item.fields.instructor.map((inst: any) => (
            <div key={inst.id}>
              {blogs.includes.Entry.map((a: any, index: number) => (
                <div key={a.id}>
                  {inst.sys.id == a.sys.id ? (
                    <div className="bg-white w-10/12 m-auto flex flex-col justify-center items-center gap-8 py-16">
                      {blogs.includes.Asset.map((img: any) => (
                        <div key={img.id}>
                          {a.fields.image.sys.id == img.sys.id ? (
                            <div className="rounded-full bg-white m-2 shadow-inst border border-4 w-60 h-60 border-slate-400 overflow-hidden">
                              <Image
                                className="rounded-full object-fit"
                                src={"https:" + img.fields.file.url}
                                alt="My Image"
                                width={500}
                                height={500}
                              />
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      ))}
                      <div className="text-center flex flex-col gap-2">
                        <h1 className="text-2xl font-bold ">{a.fields.name}</h1>
                        <p className="text-xl font-medium text-black">
                          {a.fields.designation}
                        </p>
                      </div>
                      <div className="w-10/12 m-auto">
                        <p className="text-gray-500 ">{a.fields.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default About;
