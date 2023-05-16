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

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font border-t">
        <motion.header
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <div className="container px-5 py-8 flex sm:mx-auto sm:mb-2  ">
            <div className="p-2 sm:w-1/2 w-full ">
              <h2 className="font-medium  title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                PRODUCTS AND SOLUTIONS
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center item-center  -mb-1 space-y-2.5">
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Insfrastructure as a services
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Digital Marketing
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Middleware
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Data Warehouse and Business Intelligent Solution
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Human Capital Management
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Hospital Integrated Information System
                </span>
              </nav>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                SERVICES
              </h2>
              <nav className="flex flex-col text-center sm:text-left  p-2 sm:w-1/2 w-full -mb-1 space-y-2.5">
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Implemetation Services
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Managed and Maintenance Support
                </span>
                <span>
                  <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT Consultant
                </span>
              </nav>
            </div>
          </div>
        </motion.header>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2023 Rafas
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
