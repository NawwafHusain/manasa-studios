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
        markers: true,
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
      className="pt-40 px-4 relative  min-h-[100vh] overflow-x-clip"
      ref={root}
    >
      <div className="text-white">
        <h1
          className="text-[7rem] mb-0 opacity-100"
          ref={(e) => {
            title.current[0] = e;
          }}
        >
          Transforming the <br />
          Digital Landscape
        </h1>
        <p
          className="text-md font-thin w-[45%] opacity-100"
          ref={(e) => {
            title.current[1] = e;
          }}
        >
          At Manasa Studios, we&apos;re not just building websites; we&apos;re
          sculpting the digital future. &quot;Transforming The Digital
          Landscape&quot; is our commitment to innovation and excellence in the
          digital realm. Our team of visionary designers and developers is
          dedicated to crafting online experiences that resonate and engage.
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
        width={1200}
        height={1200}
        className="absolute top-[21%] -right-80 -z-10 opacity-100 translate-x-0"
        alt="landscape"
        ref={image}
      />
    </section>
  );
}
