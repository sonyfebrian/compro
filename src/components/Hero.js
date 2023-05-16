import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroLogo from "../assets/hero.webp";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "./AnimatedText";

const AnimatedTextWord = ({ text }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      style={{
        overflow: "hidden",
        // display: "flex",
        fontSize: "2rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <section className="hero relative">
        <Image
          width=""
          height=""
          src={HeroLogo}
          alt="houses on the water"
          className="w-full bg-black opacity-80"
          style={{ maxWidth: "100%" }}
        />
        {currentRoute === "/" && (
          <>
            {/* <span className="absolute text-[#E64936] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WIJAYA KARYA – BPM" />

              <p className="text-base text-center mt-2">
                We bring solution for construction business throught Business
                Process Modeling
              </p>
            </span> */}
            {/* <div className="absolute text-[#E64936] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WIJAYA KARYA – BPM" />
              <p className="text-base text-center mt-2">
                We bring solution for construction business throught Business
                Process Modeling
              </p>
            </div> */}
            {/* <div className=" absolute text-[#E64936] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {" "}
              <AnimatedTextCharacter text="WIJAYA KARYA – BPM" />
            </div> */}
            <div className="absolute text-[#E64936] top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextWord text="WIJAYA KARYA - BPM" />
              <p className="text-base text-center mt-2">
                We bring solution for construction business throught Business
                Process Modeling
              </p>
            </div>
          </>
        )}
        {currentRoute === "/vision" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHO WE ARE" />
            </div>
          </>
        )}

        {currentRoute === "/product" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHAT WE DO" />
            </div>
          </>
        )}
        {currentRoute === "/dinamika" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHY RAFAS" />
            </div>
          </>
        )}
        {currentRoute === "/customer" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CUSTOMERS" />
            </div>
          </>
        )}
        {currentRoute === "/gallery" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2   left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="GALLERY" />
            </div>
          </>
        )}
        {currentRoute === "/contact" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CONTACT" />
            </div>
          </>
        )}
        {currentRoute === "/career" && (
          <>
            {" "}
            <div className="absolute text-[#E64936] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CAREER" />
            </div>
          </>
        )}
      </section>
    </>
  );
}
