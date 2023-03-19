"use client";

import React, { useEffect, useState } from "react";

function CourseDetail() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="bg-white py-16 flex flex-col gap-4">
      <h1 className="text-5xl text-black font-black uppercase text-center">
        Specialized Tracks
      </h1>
      <p className="sentence text-center w-7/12 m-auto font-medium">
        After completing the first three quarters the participants will select
        one or more specializations consisting of two courses each:
      </p>
      <div>
        <div className="tabs flex justify-center py-4">
          {data.map((item: any, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="px-2 py-0 font-medium text-lg uppercase mb-0">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {data.map((item: any, index) => (
            <div
              key={index}
              className={`tab-pane ${activeTab === index ? "active" : ""}`}
            >
              <div className="flex w-10/12 mx-auto pt-8">
                <div className="w-6/12 flex flex-col gap-4 p-6 pt-16 pb-8 bg-gray-100 rounded-tr-2xl rounded-br-2xl">
                  <div className="w-10/12 mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-black uppercase">
                      {item.courseName}
                    </h1>
                    <p className="text-medium text-lg w-10/12 text-black">
                      {item.courseDetail}
                    </p>
                  </div>
                </div>
                <div className="w-6/12 h-full flex items-center">
                  <div className="grid grid-cols-2 w-10/12 m-auto flex justify-center gap-4">
                    {item.quarters &&
                      Object.values(item.quarters).map(
                        (quarter: any, index: number) => (
                          <div
                            key={index}
                            className="col-span-1 mb-2 shadow-box p-8 bg-slate-100 border-t-4 border-black max-w-[20rem]"
                          >
                            <h2 className="text-xl font-bold mb-2 uppercase text-black">
                              {quarter.title}
                            </h2>
                            <p className="text-md font-medium text-gray-600">
                              {quarter.description}
                            </p>
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .tabs {
            display: flex;
            justify-content: center;
          }
          .tab {
            cursor: pointer;
            padding: 10px;
            /* background-color: #ccc; */
            border-bottom: 2px solid #ccc;
          }
          .tab.active {
            background-color: #fff;
            border-bottom: 2px solid #000;
          }
          .tab-content {
            margin-top: 10px;
          }
          .tab-pane {
            display: none;
          }
          .tab-pane.active {
            display: block;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CourseDetail;
