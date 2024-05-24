"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Projects2() {
  gsap.registerPlugin(ScrollTrigger);

  const gridRef = useRef([null]);
  const textRef = useRef([null]);
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        //markers: true,
      },
      y: 100,
      duration: 1,
      ease: "power4",
      opacity: 0,
      delay: 0.5,
    });

    gridRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
          //markers: true,
        },
        x: index == 1 ? 400 : -400,
        duration: 10,
        opacity: 1,
      });
    });
  });

  return (
    <section
      className="flex flex-col w-[100vw] h-[100vh] relative  xl:mt-0 mt-12 md:mt-64"
      ref={sectionRef}
    >
      {/**projects grid */}
      <div className="rotate-12 bg-gradient-to-l projects-flow translate-x-[-10vw] xl:translate-x-[-40vw] opacity-25 xl:opacity-100">
        {/*Row 1 */}
        <div
          ref={(e) => {
            gridRef.current[0] = e;
          }}
          className="flex flew-nowrap w-[200vw] h-[34vh] gap-[4vw] justify-items-around  "
        >
          <div className="relative w-[22vw] h-[30vh] ml-[2vw]">
            <Image
              src="/images/corinna/HomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/corinna/HomePage.png"
              fill
              objectFit="cover"
              className="object-top scale-x-[-1]"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          {/*second group*/}
          <div className="relative w-[22vw] h-[30vh] ">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
        </div>
        {/*Row 2*/}
        <div
          ref={(e) => {
            gridRef.current[1] = e;
          }}
          className="flex flew-nowrap w-[200vw] h-[34vh] gap-[4vw] justify-items-around  relative right-[100vw] "
        >
          <div className="relative w-[22vw] h-[30vh] ml-[2vw]">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          {/*second group*/}
          <div className="relative w-[22vw] h-[30vh] ">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
        </div>
        {/*Row 3*/}
        <div
          ref={(e) => {
            gridRef.current[2] = e;
          }}
          className="flex flew-nowrap w-[200vw] h-[34vh] gap-[4vw] justify-items-around  "
        >
          <div className="relative w-[22vw] h-[30vh] ml-[2vw]">
            <Image
              src="/images/twelve/7.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/twelve/7.jpg"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/corinna/HomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="relative w-[22vw] h-[30vh]">
            <Image
              src="/images/NewHomePage.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
        </div>
      </div>

      {/*text */}
      <div className="absolute w-[100vw] left-0 top-[30vh] xl:top-0 h-full  xl:grid-cols-3 xl:grid-rows-3 grid-cols-1  grid-rows-1   text-white xl:grid  gap-4 items-center justify-items-center">
        <div className="xl:col-start-3 col-start-2 row-start-2 flex flex-col items-center  xl:block">
          <h2
            ref={(e) => {
              textRef.current[0] = e;
            }}
            className="xl:text-9xl text-7xl xl:text-left text-center"
          >
            Projects
          </h2>
          <p
            ref={(e) => {
              textRef.current[1] = e;
            }}
            className="text-xl font-thin xl:w-[50%] w-[80%] xl:text-left text-center"
          >
            Apps, Websites, and other projects I have worked on. we do it all
          </p>
          <Link
            ref={(e) => {
              textRef.current[2] = e;
            }}
            href="/projects"
            className="  border-2 border-white hover:text-black hover:bg-white h-12 w-40 rounded-3xl mt-10 flex justify-center items-center"
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
}

/*first style
     <section
      className=" mt-20 ml-24 w-[100vw] rounded-[3rem] lg:px-0 relative flex h-[70vh] overflow-clip drop-shadow-2xl shadow-white  left-0 top-0 "
      id="projects"
    >
      <div className="flex w-[40%] flex-col justify-center  text-white bg-gradient-to-r from-[#151515] from-[70%] pl-40 relative z-10">
        <h1 className="text-7xl">Projects</h1>
        <p className="text-xl font-thin w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          efficitur, lorem eu gravida efficitur, nisl ante efficitur quam, quis
        </p>
        <Link
          href="/projects"
          className=" border-2 border-white hover:text-black hover:bg-white h-12 w-40 rounded-3xl mt-10 flex justify-center items-center"
        >
          Explore more
        </Link>
      </div>
      <div className="flex flex-col w-[300vw]  gap-[1%] left-12 z-0 overflow-clip absolute h-[100%]">
        <div className="w-[200vw] flex gap-[1%] sideScroll h-[50%] -top-5 left-0 absolute">
          <div className="h-[100%] w-[30%] bg-slate-500 rounded-3xl relative">
            <h1 className="text-3xl text-white">Project 1</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/corinna/corinnaCoachingOne.com.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="h-[100%] w-[30%] bg-slate-500 rounded-3xl relative">
            <h1 className="text-3xl text-white">Project 2</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/twelve/4.png"
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <div className="h-[100%] w-[30%] bg-slate-500 rounded-3xl relative">
            <h1 className="text-3xl text-white">Project 3</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/corinna/corinnaCoachingOne.com.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="h-[100%] w-[30%] bg-slate-500 rounded-3xl relative">
            <h1 className="text-3xl text-white">Project 4</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/twelve/4.png"
              fill
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div className="w-[200vw] flex gap-[1%] sideScroll2 h-[50%] absolute  -bottom-5">
          <div className="h-[100%] w-[30%] bg-blue-100 rounded-3xl relative overflow-clip ">
            <h1 className="text-3xl text-white">Project 1</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/corinna/corinnaCoachingOne.com.png"
              fill
              className="object-top rounded-3xl object-cover absolute"
            />
          </div>
          <div className="h-[100%] w-[30%] bg-red-200 rounded-3xl relative  overflow-clip">
            <h1 className="text-3xl text-white">Project 2</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <div className="h-[100%] w-[30%] bg-blue-100 rounded-3xl relative  overflow-clip">
            <h1 className="text-3xl text-white">Project 3</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/corinna/corinnaCoachingOne.com.png"
              fill
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div className="h-[100%] w-[30%] bg-red-200 rounded-3xl relative overflow-clip">
            <h1 className="text-3xl text-white">Project 4</h1>
            <p className="text-md font-thin w-[50%]"></p>
            <Image
              src="/images/twelve/6.jpg"
              fill
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>
    </section>*/
