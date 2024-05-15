"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MainTitle from "./components/mainTitle";
import { Kufam } from "next/font/google";
import { Noto_Nastaliq_Urdu } from "next/font/google";
const kufam = Kufam({ subsets: ["latin"] });
const noto = Noto_Nastaliq_Urdu({ subsets: ["latin"] });

export default function Hero() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  gsap.registerPlugin(ScrollTrigger);

  const card = useRef([]);
  const title = useRef([]);
  const root = useRef();
  const titleMask = useRef();

  useEffect(() => {
    if (!titleMask.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = titleMask.current;
      setPoint({
        x: clientX - element.offsetLeft - 150,
        y: clientY - element.offsetTop - 150,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useGSAP(
    () => {
      const isMobile = window.innerWidth <= 768; // assuming 768px is your mobile breakpoint

      gsap.to(title.current, {
        scrollTrigger: {
          trigger: root.current,
          start: "top 20%",
          end: "100% 50%",

          //markers: true,
          toggleActions: "play reverse play reverse",
        },
        duration: 1,
        stagger: 0.1,
        x: 0,
        ease: "power4.out",
        delay: 0,
        opacity: 1,
        marginLeft: 0,
        touchAction: "play reverse play reverse",
      });

      gsap.to(titleMask.current, {
        scrollTrigger: {
          trigger: root.current,
          start: "top 20%",
          end: "100% 50%",

          //markers: true,
          toggleActions: "play reverse play reverse",
        },
        duration: 1,
        stagger: 0.1,
        x: 0,
        maskSize: "300px",
        ease: "power4.out",
        delay: 0,
        opacity: 1,
        marginLeft: 0,
        touchAction: "play reverse play reverse",
      });

      gsap.to(card.current, {
        scrollTrigger: {
          trigger: root.current,
          start: "top 20%",
          end: "100% 60%",

          //markers: true,
          toggleActions: "play reverse play reverse",
        },
        duration: 1,
        stagger: 0.1,
        y: 0,
        ease: "power4.out",
        delay: isMobile ? 0.5 : 0,
        opacity: 1,
        touchAction: "play reverse play reverse",
      });

      //title sharing ref with the rest
    },
    { scope: root }
  );

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  //مناسا
  //ستوديوس
  return (
    <section
      className=" flex w-full xl:h-[100vh] h-[100vh] pt-28 xl:box-border justify-center relative xl:gap-0 gap-4 xl:px-0 xl:items-stretch right-2 px-8"
      ref={root}
      id="hero"
    >
      <svg width="0" height="0">
        <defs>
          <clipPath
            id="clip-path"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0046728971962617,0.0035460992907801)"
          >
            <path
              className="cls-1"
              d="M201.21,84.41h-28.02c-7.15,0-12.95-5.8-12.95-12.95v-18.85c0-7.34-5.95-13.29-13.29-13.29h-28.07c-7.05,0-12.77-5.72-12.77-12.77v-12.77c0-7.34-5.95-13.29-13.29-13.29H13.79C6.45.5.5,6.45.5,13.79v255.42c0,7.34,5.95,13.29,13.29,13.29h187.42c7.34,0,13.29-5.95,13.29-13.29V97.7c0-7.34-5.95-13.29-13.29-13.29Z"
            />
          </clipPath>
        </defs>
      </svg>
      {/* wigglyt div desktop */}
      <div
        className="xl:w-[35vw] max-h-[100%] w-40  card rounded-3xl mt-4 bottom-3 relative xl:flex flex-col card-wave xl:right-5 xl:ml-10 translate-x-[0%]  hidden"
        ref={(e) => {
          card.current[0] = e;
        }}
        style={{ clipPath: "url(#clip-path)" }}
      >
        <h1 className="xl:text-[4.5vw] xxl:text-[5rem]  text-xl xl:leading-[12vh] leading-[2.5em] text-white mt-5 xl:ml-9 ml-4  ">
          Web <br /> Design + <br />
          Development
          <br />
        </h1>
        <ul className="xl:ml-9 ml-4 xl:text-4xl text-md  mt-10 text-white font-light xxl:text-white">
          <li>- Web Design</li>
          <li className="w-[90%] xl:w-auto">- Web Development</li>
          <li>- SEO</li>
          <li>- Branding</li>
        </ul>
        <Image
          src={"/images/prism.png"}
          width={750}
          height={750}
          className="absolute -bottom-[9rem] -left-[6rem] -z-10 xl:opacity-60 opacity-60  h-[100%]  min-w-[100%]  object-cover"
          alt="3D prism background"
        />
        <div
          onClick={() => scrollToSection("services")}
          className="absolute bottom-[2rem] right-[2rem] bg-transparent text-white border-white border-2 hover:bg-white hover:text-black rounded-full px-6 py-3 cursor-pointer"
        >
          View Our Packages
        </div>
      </div>
      {/* <div className="xl:w-[38vw] lg:w-[50vw] relative h-[98%]">
        <div className="wiggle1"></div>
        <div className="wiggle2"></div>
        <div className="wiggle3"></div>
        <div className="wiggle4"></div>
        <div className="wiggle5"></div>
        <div className="wiggle6"></div>
      </div> */}
      {/*right side of screen */}
      <Suspense fallback={<MainTitle />}></Suspense>
      {/* removed lg-[50vw] from here*/}
      <div className="flex flex-col flex-nowrap xl:w-[60vw] w-full  h-full">
        <div className="flex flex-col xl:w-min xl:items-end h-min text-center xl:mt-5 mt-2 items-center">
          <h1
            className="xl:text-[12.5vw] xxl:text-[12.5rem]  text-[17vw] text-white leading-none xl:tracking-[2.3vw] xxl:tracking-[3vw]  lg:text-[12.5rem] xl:right-1  xl:absolute  translate-x-[100%]  opacity-0"
            ref={(e) => {
              title.current[0] = e;
            }}
          >
            MANASA
          </h1>

          <h1
            className="xl:text-[12.5vw] xxl:text-[12.5rem] text-[17vw] text-white leading-none xl:tracking-[0.55vw] xxl:tracking-[1.65vw] lg:text-[12.5rem] xl:w-min xl:h-min xl:mt-40 xl:mr-0  translate-x-[100%]  opacity-0 text-justify"
            ref={(e) => {
              title.current[1] = e;
            }}
          >
            STUDIOS
          </h1>
        </div>
        <div
          ref={titleMask}
          style={{ maskPosition: `${x}px ${y}px` }}
          className={`${noto.className} xl:flex flex-col xl:w-max xl:items-end h-min text-center pb-40 pr-[20rem] pl-[10rem] mt-2 lg:w-[50vw] absolute masking hidden -translate-y-10 translate-x-[100%] overflow-visible`}
        >
          <div className="absolute -left-[10vw] w-[10vw] bg-white h-full" />
          <h1 className="xl:text-[10vw] xxl:text-[12.5rem]  text-[17vw] text-black leading-none xxl:right-[5vw]   lg:text-[12.5rem] xl:right-[13vw]  xl:absolute  ">
            مناسا
          </h1>

          <h1 className="xl:text-[12.5vw] xxl:text-[12.5rem] text-[17vw] text-black leading-none   lg:text-[12.5rem] xl:w-max xl:h-max xl:mt-[7.5rem] pb-10rem xl:mr-0 -translate-x-[10vw] ">
            ستوديوس
          </h1>
        </div>

        <div className="xl:flex xl:gap-8 gap-2 flex-1 relative bottom-3 xl:flex-row flex-col mt-5 xl:mt-2 flex xl:max-h-[50vh]">
          {/*mobile wiggly div */}
          <div
            className="card flex-auto xl:w-[9rem] rounded-3xl overflow-clip xl:hidden "
            ref={(e) => {
              card.current[1] = e;
            }}
          >
            <div className="absolute flex-1 w-full h-full top-0 left-0 px-4 pt-4 pb-6 xl:p-8 text-white rounded-3xl ">
              <h2 className="xl:text-3xl text-xl lg:text-[3rem] lg:mt-8 lg:mb-8">
                Web Design + Development
                <br />
              </h2>
              <p className="text-[0.8rem] xl:text-md lg:text-[1.75rem] font-light">
                We offer custom web design and development services tailored to
                your business needs. Our team of experts will work with you to
                create a stunning, responsive website that attracts more
                customers and increases sales.
              </p>
              <Image
                src={"/images/prism.png"}
                width={650}
                height={650}
                className="absolute -top-0 -left-20 -z-10 xl:opacity-60 opacity-60  h-[100%]    object-cover"
                alt="blobs Background"
              />
            </div>
          </div>
          <div
            className="card flex-auto xl:w-[9rem] rounded-3xl overflow-clip "
            ref={(e) => {
              card.current[2] = e;
            }}
          >
            <div className="absolute flex-1 w-full h-full top-0 left-0 p-4 xl:p-8 text-white rounded-3xl curser-normal">
              <h2 className="xl:text-3xl lg:text-[3rem] lg:mt-2 lg:mb-4">
                Crafting Digital <br />
                Experiences
              </h2>
              <p className="text-[0.8rem] xl:text-[1.2rem] lg:text-[1.75rem] font-light">
                Bespoke web design and development that breathes life into your
                brand.
              </p>
              <Image
                src={"/images/blobsRot.png"}
                width={650}
                height={650}
                className="absolute -top-0 -right-20 -z-10 xl:opacity-60 opacity-60  h-[100%]    object-cover"
                alt="blobs Background"
              />
            </div>
          </div>
          <div
            className="card flex-auto  rounded-3xl overflow-clip "
            ref={(e) => {
              card.current[3] = e;
            }}
          >
            <div
              className="absolute flex-1 w-full h-full top-0 left-0 p-4 xl:p-8 text-white rounded-3xl "
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              <h2 className="xl:text-3xl sm:block hidden lg:text-[3rem] lg:mt-2 lg:mb-4">
                Let&apos;s Build <br />
                Together
              </h2>
              <h2 className="xl:text-3xl sm:hidden ">
                Let&apos;s Build Together
              </h2>
              <p className="text-[0.8rem] xl:text-[1.2rem] lg:text-[1.75rem] font-light">
                Start your journey with us today and elvate your digital
                presence
              </p>
              <Image
                src={"/images/purpleWave.png"}
                width={450}
                height={450}
                className="absolute -top-0 -right-0 -z-10 xl:opacity-60 opacity-60  h-[100%] xxl:scale-[1.2]  object-cover"
                alt="Purple wave background"
              />
              <div
                onClick={() => scrollToSection("contact")}
                className="absolute bottom-[2rem] right-[2rem] bg-transparent text-white border-white border-2  hover:bg-white hover:text-black rounded-full px-6 py-3 cursor-pointer"
              >
                Get in Touch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
