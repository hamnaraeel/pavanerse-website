import React from "react";
{
  /* @ts-expect-error Async Server Component */
}

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/w86v54uruq3d/entries?access_token=z4QbYhhNMAhOcwbarn6O1lxuE7nsiUrdrKDka8mmwHc&content_type=commonSyllabus`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function CommonSyllabus() {
  const blogs = await getBlogs();

  return (
    <div className="bg-black text-white">
      {blogs.items.map((item: any) => (
        <div
          key={item.id}
          className=" w-10/12 m-auto py-16 flex flex-col gap-4"
        >
          <h1 className="text-5xl text-white font-bold uppercase text-center">
            {item.fields.title}
          </h1>
          <p className="sentence text-center w-7/12 m-auto font-medium text-white">
            {item.fields.description}
          </p>
          <div className="grid grid-col-1 w-10/12 mx-auto sm:grid-cols-2 lg:grid-cols-3 flex mt-4 gap-6 ">
            {item.fields.courses.map((course: any) => (
              <div key={course.id} className="col-span-1 bg-black h-full">
                {blogs.includes.Entry.map((a: any) => (
                  <div key={a.id}>
                    {course.sys.id == a.sys.id ? (
                      <div className="h-full">
                        {blogs.includes.Asset.map((img: any) => (
                          <div key={img.id}>
                            {a.fields.image.sys.id == img.sys.id ? (
                              <div
                                style={{
                                  backgroundImage: `url(https:${img.fields.file.url})`,
                                }}
                                className="relative rounded-lg p-8 h-full"
                              >
                                <h1 className="text-2xl pb-4 text-white font-bold uppercase text-start">
                                  {a.fields.title}
                                </h1>
                                <p className="text-md font-medium text-white">
                                  {a.fields.description}
                                </p>
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
      {/* <div className=" w-10/12 m-auto py-16 flex flex-col gap-4">
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
      </div> */}
    </div>
  );
}

export default CommonSyllabus;
