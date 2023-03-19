import React from "react";

function MainBG(props: any) {
  return (
    <div>
      <div className=" h-[75vh] bg-[url('/asset/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="flex flex-col gap-4 justify-center items-center h-full">
          <h1 className="uppercase text-5xl text-white font-bold">
            {props.title}
          </h1>
          <p className="text-white">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default MainBG;
