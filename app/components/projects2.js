import React from "react";
import Image from "next/image";
export default function Projects2() {
  return (
    <section
      className=" pt-20 px-0 lg:px-0 relative overflow-x-clip flex h-[100vh] drop-shadow-xl shadow-white"
      id="projects"
    >
      <div className="w-[20vw] ml-10 rounded-l-3xl pl-10 text-white flex flex-col gap-y-4 justify-center bg-[#151515]">
        <h1>Projects</h1>
        <p>
          Discover our past projects and see how we can help you bring your
          brand to life.
        </p>
      </div>
      <div className="w-[200vw] flex flex-wrap justify-between h-full relative -z-10 py-4">
        <div className=" bg-white lg:w-[30%] rounded-3xl overflow-clip p-10 h-[50%] relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500">
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
        </div>
        <div className=" bg-white lg:w-[30%] rounded-3xl overflow-clip p-10 h-[50%] relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500">
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
        </div>
        <div className=" bg-white lg:w-[30%] rounded-3xl overflow-clip p-10 h-[50%] relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500">
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
        </div>
        <div className=" bg-white lg:w-[30%] rounded-3xl overflow-clip p-10 h-[50%] relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500">
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
        </div>

        <div className="w-[40%] bg-gradient-to-r from-[#151515] from-[40%]  absolute left-0 top-0 h-full" />
      </div>
    </section>
  );
}
