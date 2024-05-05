import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      className="lg:pt-40 pt-20 px-4 relative  overflow-x-clip"
      id="projects"
    >
      <h1 className="text-white text-6xl text-center lg:text-left lg:text-7xl">
        Projects
      </h1>
      <div className="flex lg:flex-wrap flex-col gap-4 flex-1 min-h-[70rem] lg:max-h-[90rem] lg:mt-0 mt-5">
        <div className="bg-white lg:w-[50%] rounded-3xl overflow-clip p-10 h-max relative flex justify-center items-center hover:-translate-y-1 transition-all duration-500 cursor-pointer">
          <div className="absolute lg:hidden left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-10 pt-5 pl-5 h-32 from-10%">
            <h1 className="text-3xl text-white">
              Clothing by Tweleve [Logo and branding]{" "}
            </h1>
          </div>
          <Image
            src={"/images/twelve/7.jpg"}
            fill
            className="object-cover hover:scale-110 transition-all duration-500 hover:cursor-default lg:object-center object-right"
            alt="tweleve logo"
          />
          <h1 className="text-5xl  relative w-[60%] hidden lg:block">
            Clothing by Tweleve [Logo and branding]
          </h1>
          <div className="w-full h-[20rem]"></div>
        </div>
        <div className="cards lg:w-[50%] lg:h-[50rem] h-[30rem] rounded-3xl overflow-clip p-10 relative hover:-translate-y-1 transition-all duration-500 cursor-pointer">
          <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-10 pt-5 pl-5 h-32 from-10%">
            <h1 className="text-3xl text-white">
              Manasa Academy (in Development)
            </h1>
          </div>
          <Image
            src={"/images/manasaAcademy.png"}
            fill
            className="object-cover object-top hover:object-bottom transition-all duration-500 hover:cursor-default "
            alt="tweleve logo"
          />
        </div>
        <div className="cards lg:w-[50%] lg:h-[30rem] h-[30rem] rounded-3xl overflow-clip p-10 relative hover:-translate-y-1 transition-all duration-500 cursor-pointer">
          <Image
            src={"/images/corinna/corinnaCoachingOne.com.png"}
            fill
            className="object-cover object-top hover:object-bottom transition-all duration-500 hover:cursor-default"
            alt="tweleve logo"
          />
          <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-black to-transparent z-10 pt-5 pl-5 lg:h-32 h-52 from-10%">
            <h1 className="text-[2rem]  text-white relative">
              Corinna Coaching [Web Design + Development]
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
