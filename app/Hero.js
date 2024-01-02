"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MainTitle from "./components/mainTitle";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);

  const card = useRef([]);
  const title = useRef([]);
  const root = useRef();

  useGSAP(
    () => {
      const tween1 = () => {
        gsap.to(card.current, {
          scrollTrigger: {
            trigger: root.current,
            start: "100% 40%",
            end: "top 0%",
            //scrub: true,
            duration: 1.5,
            //markers: true,
            toggleActions: "play none none reverse",
          },
          duration: 0.5,
          stagger: 0.1,
          y: 100,
          ease: "power4.out",
          delay: 0,
          opacity: 0,
        });
      };

      gsap.to(title.current, {
        duration: 1,
        stagger: 0.1,
        x: 0,
        ease: "power4.out",
        delay: 0,
        opacity: 1,
        marginLeft: 0,
      });

      gsap.to(card.current, {
        duration: 1,
        stagger: 0.1,
        y: 0,
        ease: "power4.out",
        delay: 0,
        opacity: 1,
        onComplete: tween1,
      });

      //title sharing ref with the rest
    },
    { scope: root }
  );

  return (
    <section
      className="flex w-full lg:h-[100vh] h-[70vh] pt-28 lg:box-border justify-center relative lg:gap-0 gap-4 lg:px-0 "
      ref={root}
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
      {/* wigglyt div */}
      <div
        className="lg:w-80 w-40 flex-1 card rounded-3xl mt-4 bottom-3 relative flex flex-col card-wave lg:right-10 lg:ml-10 lg:translate-x-[0]"
        ref={(e) => {
          card.current[0] = e;
        }}
        style={{ clipPath: "url(#clip-path)" }}
      >
        <h1 className="lg:text-[4.7rem]  text-xl lg:leading-[1.17em] leading-[2.5em] text-white mt-5 lg:ml-9 ml-4">
          Web <br />
          Design + <br />
          Developement
          <br />
        </h1>
        <ul className="lg:ml-9 ml-4 lg:text-4xl text-md  mt-10 text-white font-light">
          <li>- Web Design</li>
          <li className="w-[90%] lg:w-auto">- Web Development</li>
          <li>- SEO</li>
          <li>- Branding</li>
        </ul>
        <Image
          src={"/images/prism.png"}
          width={650}
          height={650}
          className="absolute -bottom-[9rem] -left-[6rem] -z-10 lg:opacity-90 opacity-60  h-[100%]  min-w-[100%]  object-cover"
          alt="3D prism background"
        />
      </div>

      {/*right side of screen */}
      <Suspense fallback={<MainTitle />}></Suspense>
      <div className="flex flex-col flex-nowrap lg:flex-1 lg:w-auto w-[50%]">
        <div className="flex flex-col w-min items-end h-min">
          <h1
            className="lg:text-[12.25rem]  text-[3rem] text-white leading-none tracking-[.15em] absolute lg:-right-[.15em] -right-[.5em] lg:translate-x-[100%] translate-x-[110%] lg:ml-0   opcaity-0"
            ref={(e) => {
              title.current[0] = e;
            }}
          >
            MANASA
          </h1>
          <h1
            className="lg:text-[12.25rem] text-[3rem] text-white leading-none tracking-wide w-min h-min lg:mt-48 lg:mr-0 mr-48 mt-16 translate-x-[100%] ml-10 opcaity-0"
            ref={(e) => {
              title.current[1] = e;
            }}
          >
            STUDIOS
          </h1>
        </div>

        <div className="flex gap-8 flex-1 relative bottom-3 lg:flex-row flex-col mt-5 lg:mt-0">
          <div
            className="card flex-auto lg:w-[9rem] rounded-3xl overflow-clip "
            ref={(e) => {
              card.current[1] = e;
            }}
          >
            <div className="absolute flex-1 w-full h-full top-0 left-0 p-4 lg:p-8 text-white rounded-3xl ">
              <h2 className="lg:text-3xl">
                Crafting Digital <br />
                Experiences
              </h2>
              <p className="text-[0.8rem] lg:text-md font-light">
                Bespoke web design and development that breathes life into your
                brand.
              </p>
              <Image
                src={"/images/blobsRot.png"}
                width={650}
                height={650}
                className="absolute -top-0 -right-20 -z-10 lg:opacity-90 opacity-60  h-[100%]    object-cover"
                alt="blobs Background"
              />
            </div>
          </div>

          <div
            className="card flex-auto  rounded-3xl overflow-clip "
            ref={(e) => {
              card.current[2] = e;
            }}
          >
            <div className="absolute flex-1 w-full h-full top-0 left-0 p-4 lg:p-8 text-white rounded-3xl ">
              <h2 className="lg:text-3xl sm:block hidden">
                Let&apos;s Build <br />
                Together
              </h2>
              <h2 className="lg:text-3xl sm:hidden ">
                Let&apos;s Build Together
              </h2>
              <p className="text-[0.8rem] lg:text-md font-light">
                Start your journey with us today and elvate your digital
                presence
              </p>
              <Image
                src={"/images/purpleWave.png"}
                width={450}
                height={450}
                className="absolute -top-0 -right-0 -z-10 lg:opacity-90 opacity-60  h-[100%]    object-cover"
                alt="Purple wave background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
