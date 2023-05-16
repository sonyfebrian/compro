import valueBg from "../assets/value.png";
import Image from "next/image";

import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const introHeaderVariantsRight = {
  hide: {
    opacity: 0,
    x: -10,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function Value({ data }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-10/12 mx-auto">
          <div className="flex flex-wrap w-full py-32 px-10 relative mb-4">
            <Image
              alt="gallery"
              width="820px"
              height="340px"
              className="w-full object-cover h-full object-center block rounded absolute inset-0"
              src={valueBg}
            />

            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-[#C0C0C0] font-medium title-font mb-2">
                <motion.header
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={introHeaderVariants}
                >
                  RAFAS VALUE
                </motion.header>
              </h2>

              <p className="leading-relaxed text-[#C0C0C0]">
                We are grateful for our great team and their incredible skills
                to complete the projects and achieve our client`s satisfaction
                goal
              </p>
              <div className="flex flex-wrap -m-4 mt-6 text-center relative">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#C0C0C0]">
                    98
                  </h2>

                  <p className="leading-relaxed text-[#C0C0C0]">
                    PROJECT COMPLETED
                  </p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#C0C0C0]">
                    98
                  </h2>

                  <p className="leading-relaxed text-[#C0C0C0]">
                    CLIENT SATISFACTION
                  </p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#C0C0C0]">
                    95
                  </h2>

                  <p className="leading-relaxed text-[#C0C0C0]">TEAM WORK</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#C0C0C0]">
                    87
                  </h2>

                  <p className="leading-relaxed text-[#C0C0C0]">
                    INDIVIDUAL SKILL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
