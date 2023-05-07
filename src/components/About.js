import Image from "next/image";
import Logo from "../assets/about.png";

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
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                ABOUT DINAMIKA
              </h1>

              <p className="leading-relaxed">
                In a life that is constantly evolving and growing complexity,
                information technology is needed to meet the challenges of these
                developments. Information technology has the main objective to
                simplify human activities, as well as to give solution for every
                problem in life. We built PT. DINAMIKA VISUAL KREASINDO
                (INIDIGI) on the basis of enthusiasm and a strong commitment
                among its founders in providing solutions to all business
                activities of our clients. We offer a solution in the form of
                information technology, which we believe will be very useful and
                will be the best solution to any problem in the growing
                complexity of any existing businesses.
              </p>
              <div className="mb-1 mt-4 text-base font-medium dark:text-white">
                Hardware
              </div>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#000080] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full dark:bg-blue-500"
                  style={{ width: "10%" }}
                >
                  10%
                </div>
              </div>
              <div className="mb-1 text-base font-medium dark:text-white">
                Network Solution
              </div>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#000080] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full dark:bg-blue-500"
                  style={{ width: "10%" }}
                >
                  10%
                </div>
              </div>

              <div className="mb-1 text-base font-medium dark:text-white">
                IT Consultant
              </div>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#000080] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full dark:bg-blue-500"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>

              <div className="mb-1 text-base font-medium dark:text-white">
                System Intregrator
              </div>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#000080] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full dark:bg-blue-500"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <div className="mb-1 text-base font-medium dark:text-white">
                System Development
              </div>
              <div className="w-full bg-gray-200 rounded-full p-0.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#000080] p-0.5 text-xs font-medium text-blue-100 text-center  rounded-full dark:bg-blue-500"
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
