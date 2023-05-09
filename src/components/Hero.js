import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroLogo from "../assets/hero.webp";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "./AnimatedText";

const AnimatedTextWord = ({ text }) => {
  // This will split the text into an array of word
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "3rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <>
      <section className="hero relative">
        <Image
          width="400px"
          height=""
          src={HeroLogo}
          alt="houses on the water"
          className="w-full"
        />
        {currentRoute === "/" && (
          <>
            <span className="absolute text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextWord text="WIJAYA KARYA – BPM" />

              <p className="text-base text-center mt-2">
                We bring solution for construction business throught Business
                Process Modeling
              </p>
            </span>
          </>
        )}
        {currentRoute === "/vision" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHO WE ARE" />
            </div>
          </>
        )}

        {currentRoute === "/product" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHAT WE DO" />
            </div>
          </>
        )}
        {currentRoute === "/dinamika" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="WHY DINAMIKA" />
            </div>
          </>
        )}
        {currentRoute === "/customer" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CUSTOMERS" />
            </div>
          </>
        )}
        {currentRoute === "/gallery" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="GALLERY" />
            </div>
          </>
        )}
        {currentRoute === "/contact" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CONTACT" />
            </div>
          </>
        )}
        {currentRoute === "/career" && (
          <>
            {" "}
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedTextCharacter text="CAREER" />
            </div>
          </>
        )}
      </section>
    </>
  );
}
