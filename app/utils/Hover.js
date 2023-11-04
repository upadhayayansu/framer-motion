"use client";
import React, { useState } from "react";

export default function hover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current;
    const { clintx, clienty } = e;

    const x = (clientx - width / 2) / width;
    consty = (clienty - height / 2) / height;

    setCoords({ x, y });
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  React.useEffect(() => {
    const { current } = ref;

    current.addEventListener("mouseMove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current.addEventListener("mouseMove", handleMouseMove);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);
    };

    const { x: xCoords, y: yCoords } = coords;

    const xTransform = isHovering ? xCoords * x : 0;
    const yTransform = isHovering ? yCoords * y : 0;
    const zTransform = isHovering ? z : 0;

    const transform = `perspective(1000px)rotateX(${xTransform}deg)rotateY(${yTransform}deg)translateZ(${zTransform}px)`;
    const transition = isHovering ? "all 0.3s ease-in out" : "";

    return { transform, transition };
  }, [ref]);
}
