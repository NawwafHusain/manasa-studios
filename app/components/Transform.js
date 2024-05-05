"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Transform() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768; // assuming 768px is your mobile breakpoint

    gsap.from(title.current, {
      scrollTrigger: {
        trigger: root.current,
        start: "top 50%",
        end: "100% 30%",

        duration: 1.5,
        //markers: true,
        toggleActions: "play reverse play reverse",
      },
      duration: 1.5,
      stagger: 0.1,
      y: 100,
      // ease: "power4.out",
      delay: 0,
      opacity: 0,
    });

    gsap.from(image.current, {
      scrollTrigger: {
        trigger: root.current,
        start: "top 50%",
        end: "100% 30%",
        //scrub: true,
        duration: 1.5,
        // /markers: true,
        toggleActions: "play reverse play reverse",
      },
      duration: 1,
      x: 100,
      // ease: "power4.out",
      delay: 0,
      opacity: 0,
    });
  });
  const root = useRef();
  const title = useRef([]);
  const image = useRef();
  return (
    <section
      className="lg:pt-40 pt-10 px-12 lg:px-16 relative  lg:min-h-[100vh] overflow-x-clip"
      ref={root}
    >
      <div className="text-white">
        <h1
          className="lg:text-[7rem] text-[17vw] text-center lg:text-left mb-0 opacity-100 lg:block hidden"
          ref={(e) => {
            title.current[0] = e;
          }}
        >
          Transforming the <br />
          Digital Landscape
        </h1>
        {/*mobile title */}
        <h1
          className="lg:hidden text-[12vw] text-center  mb-5 opacity-100 w-[100%]"
          ref={(e) => {
            title.current[0] = e;
          }}
        >
          Transforming the Digital Landscape
        </h1>
        <p
          className="text-sm lg:font-thin font-light lg:w-[45%] lg:text-left text-center opacity-100"
          ref={(e) => {
            title.current[1] = e;
          }}
        >
          At Manasa Studios, we&apos;re not just building websites; we&apos;re
          sculpting the digital future. &quot;Transforming the Digital
          Landscape&quot; is our commitment to innovation and excellence in the
          digital realm. Our team of visionary designers and developers are
          dedicated to crafting online experiences that resonate and engage.
          <br />
          <br />
          With every line of code and pixel-perfect design, we aim to push the
          boundaries of what&apos;s possible, setting new standards for digital
          presence and connectivity. Join us on a journey where your
          brand&apos;s story is amplified in the vast digital expanse, ensuring
          that every interaction is meaningful and every user experience is
          unforgettable.
        </p>
      </div>
      <Image
        src={"/images/landscape.png"}
        width={800}
        height={800}
        className="absolute lg:top-[30%] top-[35%] lg:-right-[5rem] -z-10 opacity-40 lg:opacity-100 translate-x-0 -right-[50%] lg:scale-100 scale-[1.9]"
        alt="landscape"
        ref={image}
      />
    </section>
  );
}
