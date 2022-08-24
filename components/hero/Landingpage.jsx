import { useMotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Landingpage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="px-4 w-full pt-40 md:pt-0 h-screen justify-center flex items-start md:items-center md:px-0">
      <div
        className="px-4 md:px-0"
        style={{
          perspective: 5000,
          width: "100%",
        }}
      >
        <motion.div
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          whileTap={{
            cursor: "grabbing",
          }}
          className="flex items-center relative justify-center"
        >
          <motion.img
            src="/sneak.png"
            height={500}
            width={1000}
            className="scale-x-flip"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landingpage;
