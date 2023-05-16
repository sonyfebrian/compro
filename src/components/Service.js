import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServiceLogo from "../assets/service.png";
import DatabaseLogo from "../assets/database.png";
import ItLogo from "../assets/it.png";
import MiddleLogo from "../assets/middleware.png";
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

export default function Service() {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <motion.header
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <div className="container px-5 py-5 mx-auto ">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">
                RAFAS SERVICES
              </h1>
              <h2 className="text-lg  tracking-widest font-medium title-font mb-1">
                Do our best to give solutions in Information Technology globally
              </h2>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center ">
                <div className="rounded-lg h-full bg-gray-100 p-8 ">
                  {" "}
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <Image
                      width="20px"
                      height="20px"
                      alt=""
                      src={ServiceLogo}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      SERVICE ORIENTED ARCHITERTURE
                    </h2>
                    <p className="leading-relaxed text-base">
                      Service Oriented Architecture (SOA), an architectural
                      model’s development which aim to improve the
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center ">
                <div className="rounded-lg h-full bg-gray-100 p-8 ">
                  {" "}
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <Image width="20px" height="20px" alt="" src={MiddleLogo} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      MIDDLLEWARE SOLUTIONS
                    </h2>
                    <p className="leading-relaxed text-base">
                      The implementation of Service Oriented Architecture (SOA)
                      needs middleware solutions, which is a
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center ">
                <div className="rounded-lg h-full bg-gray-100 p-8 ">
                  {" "}
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <Image width="20px" height="20px" alt="" src={ItLogo} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-10">
                      IT CONSULTING
                    </h2>
                    <p className="leading-relaxed text-base">
                      Specializes in a wide range of information technology
                      solutions htmlFor your company including network
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center ">
                <div className="rounded-lg h-full bg-gray-100 p-8 ">
                  {" "}
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <Image
                      width="20px"
                      height="20px"
                      alt=""
                      src={DatabaseLogo}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      DATABASE SYSTEM SOLUTIONS
                    </h2>
                    <p className="leading-relaxed text-base">
                      Database System Solution also known as Database Management
                      System. It is a software program which
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      </section>
    </>
  );
}
