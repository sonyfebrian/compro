import Navbar from "@/components/Navbar.js";
import Hero from "@/components/Hero";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function contact() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="text-gray-600 body-font   mb-24">
        <div className="flex flex-col text-center w-full  my-4 ">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mt-4 text-black">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
            We would love to hear from you
          </p>
        </div>

        <div className="wrap w-full sm:w-5/6 mx-auto relative">
          <div className="grid lg:grid-cols-10 md:grid-col-5 md:px-10 sm:px-10 px-10">
            <div className="row-span-full col-span-6 col-start-5 sm:col-end-11 self-center px-4 sm:px-10 py-4 text-white bg-white shadow-md border rounded-lg">
              <div className="lg:w-full md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="lg:px-32 md:px-10 sm:px-10 px-10 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="lg:px-32 md:px-10 sm:px-10 px-10 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="lg:px-32 md:px-10 sm:px-10 px-10 w-full">
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="lg:px-32 md:px-10 sm:px-10 px-10 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="lg:px-32 md:px-10 sm:px-10 px-10 w-full my-5">
                    <button className="flex mx-auto text-black bg-[#E64936] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="hidden md:block lg:block xl:block 2xl:block row-span-full col-start-1 col-span-5 self-center  p-4 text-black bg-[#E64936] rounded-lg">
              <h1 className="text-2xl font-bold py-3">
                Please get in touch with us for detailed information
              </h1>
              <div className="flex h-full items-center py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className="title-font font-medium">
                  <span className="title-font font-medium">
                    SOHO Pancoran Noble Wing Lt. 11 Unit 6 Jl. Letjend MT
                    Haryono Kav 2-3, Tebet Barat, Jakarta Selatan
                  </span>
                </span>
              </div>
              <div className="flex h-full items-center py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 flex-shrink-0 mr-4 fill-black stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <span className="title-font font-medium">+6221 29552704</span>
              </div>

              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 fill-black stroke-white"
                    viewBox="0 0 24 24 "
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 fill-black stroke-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 fill-black stroke-white"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 fill-black stroke-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
