import Image from "next/image";
import Hero from "./Hero";
import BackToTop from "./components/BackToTop";
import { Suspense } from "react";
import Transform from "./components/Transform";
import Method from "./components/method";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Services from "./components/services";

export default function Home() {
  //const heroHTML = `<section className="flex w-full h-[100vh] pt-28 box-border justify-center relative gap-0"> <svg width="0" height="0"> <defs> <clipPath id="clip-path" clipPathUnits="objectBoundingBox" transform="scale(0.0046728971962617,0.0035460992907801)" > <path className="cls-1" d="M201.21,84.41h-28.02c-7.15,0-12.95-5.8-12.95-12.95v-18.85c0-7.34-5.95-13.29-13.29-13.29h-28.07c-7.05,0-12.77-5.72-12.77-12.77v-12.77c0-7.34-5.95-13.29-13.29-13.29H13.79C6.45.5.5,6.45.5,13.79v255.42c0,7.34,5.95,13.29,13.29,13.29h187.42c7.34,0,13.29-5.95,13.29-13.29V97.7c0-7.34-5.95-13.29-13.29-13.29Z" /> </clipPath> </defs> </svg> <div className="w-80 flex-1 card rounded-3xl mt-4 bottom-3 relative flex flex-col card-wave right-10 ml-10" style={{ clipPath: "url(#clip-path)" }} > <h1 className="text-[5.3rem] leading-[1.05em] text-white mt-5 ml-9"> Web <br /> Design + <br /> Developers <br /> </h1> <ul className="ml-9 text-4xl mt-10 text-white font-light"> <li>- Web Design</li> <li>- Web Development</li> <li>- SEO</li> <li>- Branding</li> </ul> <Image src={"/images/prism.png"} width={650} height={650} className="absolute -bottom-[9rem] -left-[6rem] -z-10 opacity-90 h-[100%] min-w-[100%] object-cover" /> </div> <div className="flex flex-col flex-nowrap flex-1"> <div className="flex flex-col w-min items-end h-min"> <h1 className="text-[12.25rem] text-white leading-none tracking-[.15em] absolute -right-[.15em]"> MANASA </h1> <h1 className="text-[12.25rem] text-white leading-none tracking-wide w-min h-min mt-48"> STUDIOS </h1> </div> <div className="flex gap-8 flex-1 relative bottom-3"> <div className="card flex-auto w-[9rem] rounded-3xl overflow-clip"> <div className="absolute flex-1 w-full h-full top-0 left-0 p-8 text-white rounded-3xl "> <h2 className="text-3xl"> Crafting Digital <br /> Experiences </h2> <p className="text-md font-light"> Bespoke web design and development that breathes life into your brand. </p> <Image src={"/images/blobsRot.png"} width={650} height={650} className="absolute -top-0 -right-20 -z-10 opacity-90 h-[100%] object-cover" /> </div> </div> <div className="card flex-auto rounded-3xl overflow-clip"> <div className="absolute flex-1 w-full h-full top-0 left-0 p-8 text-white rounded-3xl "> <h2 className="text-3xl"> Let's Build <br /> Together </h2> <p className="text-md font-light"> Start your journey with us today and elvate your digital presence </p> <Image src={"/images/purpleWave.png"} width={450} height={450} className="absolute -top-0 -right-0 -z-10 opacity-90 h-[100%] object-cover" /> </div> </div> </div> </div> </section>`;
  const transform = `<section className="pt-40 px-4 relative  overflow-x-clip">
 <div className="text-white">
   <h1 className="text-8xl mb-10">
     Transforming the <br />
     Digital Landscape
   </h1>
   <p className="text-md font-thin w-[40%]">
     At Manasa Studios, we&apos;re not just building websites; we&apos;re
     sculpting the digital future. &quot;Transforming The Digital
     Landscape&quot; is our commitment to innovation and excellence in
     the digital realm. Our team of visionary designers and developers is
     dedicated to crafting online experiences that resonate and engage.
     With every line of code and pixel-perfect design, we aim to push the
     boundaries of what&apos;s possible, setting new standards for
     digital presence and connectivity. Join us on a journey where your
     brand&apos;s story is amplified in the vast digital expanse,
     ensuring that every interaction is meaningful and every user
     experience is unforgettable.
   </p>
 </div>
 <Image
   src={"/images/landscape.png"}
   width={1200}
   height={1200}
   className="absolute top-[21%] -right-72 -z-10"
 />
</section>`;
  return (
    <main className="absolute top-0 overflow-x-clip w-full ">
      <Hero />
      <Suspense fallback={transform}>
        <Transform />
      </Suspense>
      {/*Projects Section */}
      <Projects />
      <Method />
      <Services />
      <Contact />
      <section className=" px-4 relative flex flex-col justify-center mb-16 overflow-x-clip mt-24">
        {/* <div className="flex gap-10 h-[20rem] my-10 ">
          <div className="flex-1 cards rounded-3xl"></div>
          <div className="flex-1 cards rounded-3xl"></div>
        </div> */}
        <BackToTop />
      </section>
    </main>
  );
}
