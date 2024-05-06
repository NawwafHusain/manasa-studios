"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Services() {
  gsap.registerPlugin(ScrollTrigger);

  const card = useRef([]);

  const title = useRef();
  const root = useRef();

  useGSAP(() => {
    gsap.to(title.current, {
      scrollTrigger: {
        trigger: root.current,
        start: "top 50%",
        end: "100% 60%",
        toggleAction: "play reverse play reverse",
      },
      duration: 1,
      stagger: 0.1,
      x: 0,
      ease: "power4.out",
      delay: 0,
      opacity: 1,

      touchAction: "play reverse play reverse",
    });

    card.current.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "100% 40%",
          toggleActions: "play reverse play reverse",
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        stagger: 0.2,
        touchAction: "play reverse play reverse",
      });
    });
  });
  return (
    <div id="services" className="text-white pt-40 mb-16 lg:px-16 px-4">
      <h1
        ref={title}
        className="lg:text-7xl lg:text-left text-center text-6xl mb-4 opacity-0"
      >
        Services
      </h1>

      <div className="flex lg:grid xl:flex xl:flex-row lg:auto-rows-min flex-col gap-10 items-center lg:items-start lg:grid-rows-2   lg:grid-cols-2 lg:gap-4 xl:gap-10  xl:flex-nowrap ">
        {/*Design Package */}
        <div
          ref={(e) => {
            card.current[0] = e;
          }}
          className="opacity-0 cards p-5 shadow-white h-max xl:flex-1 lg:w-full  md:w-[60%] w-[90%] rounded-3xl flex flex-col  items-center lg:row-span-1 "
        >
          <div className="flex items-center gap-4 mb-7 ml-3 w-full">
            <div className="rounded-full  border-white border-2 p-2">
              <Image
                src={"/images/web-design.png"}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            <h1 className="text-2xl ">Design Package</h1>
          </div>
          <div className="flex gap-2">
            <p className="text-xl">From $</p>
            <p className="text-7xl">400</p>
          </div>
          <div className="w-full mx-2 border-2 border-red-400 rounded-xl p-4 mt-16">
            <h2>Who is this for?</h2>
            <p className="font-thin text-md">
              {" "}
              Clients who either have their own web developer or are contracted
              with a developer can use this package to provide your developers
              with stunning high-fidelity designs according to the best UI/UX
              principles and practices.{" "}
            </p>
          </div>

          <div className="w-full mx-2 border-2 border-white rounded-xl p-4 mt-2">
            <h2>What&apos;s included in this package?</h2>
            <p className="font-thin text-md">
              The Design Package includes the following:
            </p>
            <ul className="list-disc list-inside text-md font-thin">
              <li>
                Minimum of 7 Desktop and 7 Mobile Designs
                <br />
              </li>
              <li>
                Figma Files
                <br />
              </li>
              <li>
                Font Liscenses
                <br />
              </li>
              <li>Wireframes</li>
            </ul>
          </div>
        </div>

        {/*Dev Package */}
        <div
          ref={(e) => {
            card.current[1] = e;
          }}
          className="opacity-0 cards p-5 h-max xl:flex-1 lg:w-full  md:w-[60%] w-[90%] rounded-3xl flex flex-col  items-center lg:row-start-1 lg:row-end-2 "
        >
          <div className="flex items-center gap-4 w-full mb-7 ml-3">
            <div className=" rounded-full border-white border-2 p-2">
              <Image
                src={"/images/coding.png"}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl ">Development Package</h1>
          </div>
          <h2 className="text-gray-100 underline text-xl font-thin mb-2">
            Development
          </h2>
          <div className="flex gap-2 ">
            <p className="text-xl">From $</p>
            <p className="text-7xl">900</p>
          </div>
          <h2 className="text-gray-100 underline text-xl font-thin mb-2 mt-5">
            Maintenance and Upkeep
          </h2>
          <div className="flex gap-2 lg:flex-row flex-col">
            <div className="flex gap-2">
              <p className="text-lg">from $</p>
              <p className="text-6xl">35</p>
              <p className="text-lg self-end -translate-x-2">/mo</p>
            </div>

            <p className="self-center lg:text-md">or</p>
            <div className="flex gap-2">
              <p className="text-lg">from $</p>
              <p className="text-6xl">500</p>
              <p className="text-lg self-end -translate-x-2">/yr</p>
            </div>
          </div>
          <div className="w-full mx-2 border-2 border-red-400 rounded-xl p-4 mt-16">
            <h2>Who is this for?</h2>
            <p className="font-thin text-md">
              {" "}
              Clients who have an existing web presence and want to update it
              with new features, or clients who have existing designs that need
              to be developed into pixel-perfect websites. <br />
            </p>
          </div>
          <div className="w-full mx-2 border-2 border-white rounded-xl p-4 mt-2">
            <h2>What&apos;s included in this package?</h2>
            <p className="font-thin text-md">
              The Development Package includes the following:
            </p>
            <ul className="list-disc list-inside text-md font-thin">
              <li>
                Minimum of 7 responsive pages developed
                <br />
              </li>
              <li>Web Hosting (if needed)*</li>
              <li>
                Basic SEO
                <br />
              </li>
              <li>
                Domain Name**
                <br />
              </li>
              <li>
                SSL Certificate
                <br />
              </li>
            </ul>
            <p className="font-thin text-md">
              <br />
              * For exisitng websites, the client can choose to use their
              exisiting hosting or ask us to host.
              <br />
              ** First year price included, after that the costs are paid by the
              customer. <br />
            </p>
          </div>
        </div>

        {/* Complete Package */}
        <div
          ref={(e) => {
            card.current[2] = e;
          }}
          className="opacity-0 cards p-5 h-max xl:flex-1 lg:w-full  md:w-[60%] w-[90%] rounded-3xl flex flex-col  items-center lg:row-start-2 align-top xl:mt-0 lg:-mt-8"
        >
          <div className="flex items-center gap-4 w-full mb-7 ml-3">
            <div className="rounded-full border-white border-2 p-2">
              <Image
                src={"/images/front-end-programming.png"}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl ">Complete Package</h1>
          </div>
          <h2 className="text-gray-100 underline text-xl font-thin mb-2">
            Design and Development
          </h2>
          <div className="flex gap-2 ">
            <p className="text-xl">From $</p>
            <p className="text-7xl">1200</p>
          </div>
          <h2 className="text-gray-100 underline text-xl font-thin mb-2 mt-5">
            Maintenance and Upkeep
          </h2>
          <div className="flex gap-2 lg:flex-row flex-col">
            <div className="flex gap-2">
              <p className="text-lg">from $</p>
              <p className="text-6xl">35</p>
              <p className="text-lg self-end -translate-x-2">/mo</p>
            </div>

            <p className="self-center lg:text-md">or</p>
            <div className="flex gap-2">
              <p className="text-lg">from $</p>
              <p className="text-6xl">500</p>
              <p className="text-lg self-end -translate-x-2">/yr</p>
            </div>
          </div>
          <div className="w-full mx-2 border-2 border-red-400 rounded-xl p-4 mt-16">
            <h2>Who is this for?</h2>
            <p className="font-thin text-md">
              {" "}
              If you do not have a website, or your exisiting website needs a
              major revamp, this package is for you. We will provide designs to
              your liking, and develop them with the highest quality.{" "}
            </p>
          </div>

          <div className="w-full mx-2 border-2 border-white rounded-xl p-4 mt-2">
            <h2>What&apos;s included in this package?</h2>
            <p className="font-thin text-md">
              The Complete Package includes the following:
            </p>
            <ul className="list-disc list-inside text-md font-thin">
              <li>
                Web Design
                <br />
              </li>
              <li>
                Web Development
                <br />
              </li>
              <li>
                Basic SEO
                <br />
              </li>
              <li>
                Domain Name*
                <br />
              </li>
              <li>
                Web Hosting
                <br />
              </li>
              <li>
                Email Hosting***
                <br />
              </li>
              <li>
                SSL Certificate
                <br />
              </li>
              <li>
                Basic Web Analytics
                <br />
              </li>
            </ul>
            <p className="font-thin text-md">
              <br />
              * Subject to availibilty, cost includes first year domain
              registration.
              <br />
              ** First year price included, after that the costs are paid by the
              customer. <br />
            </p>
          </div>
        </div>
      </div>

      {/*Social Media Medaba */}
      {/* <div className="w-full flex flex-col justify-center items-center mt-24">
        <div className="flex-1 text-center justify-center items-center flex flex-col">
          <h1 className="text-5xl">
            Upgrade Your Social Media Presence <br /> with the &quot;Social
            Media Managment&quot; Add-on.
          </h1>
          <p className="w-[70%] text-xl align-middle self-center mt-5 font-thin">
            Choose from a range of packages that best suit you. Our partner
            &quot;Medaba Media&quot; is offering special rates to all Manasa
            Studios clients. Super set your stunning website with a social media
            presence to match!
          </p>
        </div>
        <div className="flex-2 flex flex-col mt-20 xl:w-[70%] xl:px-0 px-7">
          <h1 className="m-0 text-4xl">Official Partners</h1>
          <div className="flex justify-center items-center gap-10 flex-col md:flex-row mt-10 md:mt-0">
            <Image
              src="/images/MedabaLogo.jpg"
              width={500}
              height={500}
              className="object-contain"
            />
            <h1 className="text-7xl ">X</h1>
            <Image
              src="/images/LogoWhite.png"
              width={300}
              height={300}
              className="object-contain md:scale-100 scale-75 -translate-y-[25%] md:translate-y-0"
            />
          </div>
          <div className="rounded-full w-[10rem] py-4  border-2 border-white flex justify-center items-center self-end hover:bg-white hover:text-black">
            Learn More...
          </div>
        </div>
      </div> */}
    </div>
  );
}
