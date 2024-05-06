"use client";

import { useState, useEffect, useRef } from "react";

const Mousefollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [point2, setPoint2] = useState({ x: 0, y: 0 });

  const { x, y } = point;
  const { x2, y2 } = point2;
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    if (!ref.current) return;
    if (!ref2.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;
      const element2 = ref2.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      const x2 = clientX - element2.offsetLeft - element2.offsetWidth / 2;
      const y2 = clientY - element2.offsetTop - element2.offsetHeight / 2;

      setPoint({ x, y });
      setPoint2({ x2, y2 });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="mousefollow"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
      <div
        ref={ref2}
        className="mousefollow2"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
    </>
  );
};

export default Mousefollow;
