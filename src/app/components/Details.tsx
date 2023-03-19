import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
function Details() {
  return (
    <div className="w-10/12 m-auto my-16">
      <div className="grid grid-cols-3">
        <div className="col-span-1 border-r border-gray-800 w-10/12 mr-auto">
          <h1 className="text-4xl text-black font-bold my-4 w-10/12">
            A One and Quarter Years Panaverse DAO
            <span className="text-slate-400"> Earn </span>
            as you
            <span className="text-slate-400"> Learn </span>
            Program
          </h1>
        </div>
        <div className="col-span-2 grid grid-cols-2 my-auto w-12/12 m-auto">
          <div className="col-span-1 w-10/12 mx-auto flex flex-col gap-4">
            <GlobeAltIcon className="w-8 h-8 text-slate-400" />
            <p className="text-lg font-semibold w-6/12 leading-6">
              The Program in a Nutshell
            </p>
            <p className="text-sm text-gray-400">
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the programs beginning. It resembles a
              cross between a corporate venture and an educational project.
            </p>
          </div>
          <div className="col-span-1 w-10/12 m-auto flex flex-col gap-4">
            <GlobeAltIcon className="w-8 h-8 text-slate-400" />
            <p className="text-lg font-semibold w-6/12 leading-6">
              Program of Studies
            </p>
            <p className="text-sm text-gray-400">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
