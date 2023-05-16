import LogoAge from "../assets/Ag.webp";
import LogoIsystem from "../assets/isystem.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function Partner() {
  return (
    <>
      <section className="bg-black ">
        <div className="py-8 lg:py-8 mx-auto max-w-screen-xl px-1">
          <motion.header
            variants={introHeaderVariants}
            initial="hide"
            whileInView="show"
            exit="hide"
          >
            <h2 className="mb-1 lg:mb-1 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#E64936]  md:text-4xl">
              RAFAS PARTNER
            </h2>
            <p className="leading-relaxed text-base text-center mb-4 text-white">
              Meet our Professional Partner
            </p>
          </motion.header>

          <div>
            <div className="flex flex-wrap md:w-1/2 justify-center gap-4 mx-auto items-center">
              <Image src={LogoAge} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
