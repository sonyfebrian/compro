import Image from "next/image";
import Logo from "../assets/about.webp";
import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-[#F9FBFE]">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              width="400px"
              height="400px"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Logo}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-1 lg:mt-0">
              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
              >
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  ABOUT RAFAS
                </h1>
              </motion.header>

              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="leading-relaxed"
              >
                In a life that is constantly evolving and growing in complexity,
                information technology is needed to meet the challenges of these
                developments. Information technology has the main objective of
                simplifying human activities and giving a solution for every
                problem in life. We built PT. RAFAS DIGITAL KREASI based on
                enthusiasm and a strong commitment among its founders to
                providing solutions to all our client`s business activities. We
                offer a solution in the form of information technology, which
                will be very useful and the best solution to any problem in the
                growing complexity of any existing business.
              </motion.header>

              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="mb-1 mt-4 text-base font-medium"
              >
                Hardware
              </motion.header>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 ">
                <div
                  className="bg-[#E64936] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full "
                  style={{ width: "10%" }}
                >
                  10%
                </div>
              </div>
              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="mb-1 text-base font-medium "
              >
                Network Solution
              </motion.header>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 ">
                <div
                  className="bg-[#E64936] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full "
                  style={{ width: "10%" }}
                >
                  10%
                </div>
              </div>

              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="mb-1 text-base font-medium "
              >
                IT Consultant
              </motion.header>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 ">
                <div
                  className="bg-[#E64936] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full "
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>

              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="mb-1 text-base font-medium "
              >
                System Intregrator
              </motion.header>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 ">
                <div
                  className="bg-[#E64936] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full "
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <motion.header
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
                className="mb-1 text-base font-medium "
              >
                System Development
              </motion.header>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 ">
                <div
                  className="bg-[#E64936] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full "
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
