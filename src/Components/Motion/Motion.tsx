import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Motion() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-purple1 pointer-events-none z-50"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      {/* <motion.div
        className="fixed top-0 left-0 bg-blue-500 pointer-events-none z-50"
        style={{
          width: hovered ? 20 : 10,
          height: hovered ? 20 : 10,
          borderRadius: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      /> */}
      {/* Example element to hover over */}
      {/* <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-4 bg-gray-300 rounded-lg mt-10"
      >
        Hover Over Me
      </div> */}
    </div>
  );
}

export default Motion;
