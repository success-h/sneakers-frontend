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
        className="px-4 lg:px-0"
        style={{
          perspective: 2000,
          width: "100%",
        }}
      >
        <div className="">
          <h1 className="text-end mb-10 text-sm font-ubuntu sm:text-2xl">
            SHOP ALL SNEAKERS FROM ALL AMAZING BRANDS
          </h1>
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
            className="sm:-mb-32 -mb-10 ml-20 sm:ml-72 mr-10"
          >
            <h1 className="text-end sm:text-center text-4xl sm:text-7xl font-extrabold font-poppins -mr-5">
              Nike
            </h1>
            <p className="text-end text-xs sm:text-xl sm:text-center text-bold font-ubuntu mr-5">
              Air Max 270{" "}
              <span className="sm:text-4xl text-lg text-[#ff4f0f] -mr-20">
                $134
              </span>
            </p>
          </motion.div>
        </div>
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
