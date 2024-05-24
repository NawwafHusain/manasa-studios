import React from "react";

export default function page() {
  return (
    <main>
      <section className="h-[40vh] flex items-baseline justify-items-end relative">
        <h1 className="text-[15vw] text-center text-white absolute -bottom-[20vh] m-0">
          Projects
        </h1>
      </section>
      <section className="w-[100vw] bg-white h-[100vh] relative overflow-clip">
        <h1 className="text-[15vw] text-center text-black absolute -top-[25vh] m-0">
          Projects
        </h1>
      </section>
    </main>
  );
}
