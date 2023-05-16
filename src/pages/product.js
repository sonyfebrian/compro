import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="text-[#E64936] inline-flex items-center leading-relaxed mb-2"
      >
        {isReadMore ? (
          <>
            {" "}
            <span>...Read More</span>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </>
        ) : (
          <div className="ml-3">Show Less</div>
        )}
      </span>
    </p>
  );
};

const Product = () => {
  const [openTab, setOpenTab] = useState(1);
  const [Tab, setTab] = useState(1);
  return (
    <>
      <Navbar />
      <Hero />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              PRODUCTS AND SOLUTIONS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full  ">
              <div className="border-2 border-gray-200  px-4 py-6 rounded-lg text-black bg-[#E64936]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-black w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>

                <h2 className="sm:text-3xl text-2xl font-medium title-font  mb-4">
                  DIGITAL MARKETING
                </h2>
                <p className="leading-relaxed mb-20">
                  Provide all-in-one solutions for Digital Marketing Strategy
                  and Consultancy. Digital Ads, Search Engine, Mobile Marketing,
                  Email Marketing, Social Media Marketing, Content & Creative
                  Marketing. DATA WAREHOUSE AND BUSINESS INTELLIGENT SOLUTION
                  Provide all-in-one solutions for Digital Marketing Strategy
                  and Consultancy. Digital Ads, Search Engine, Mobile Marketing,
                  Email Marketing, Social Media Marketing, Content & Creative
                  Marketing.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full h-62">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>

                <h2 className="sm:text-3xl text-sm font-medium title-font text-gray-900 mb-4">
                  DATA WAREHOUSE AND BUSINESS INTELLIGENT SOLUTION
                </h2>
                <p className="leading-relaxed mb-2">
                  Data warehouse is a storage for archived data, analysis, and
                  security purposes. A data warehouse typically can be a
                  computer or multiple computers (servers) connected to create a
                  supercomputer system. To make it more useful, the stored data
                  must first be analyzed, and the Business Intelligence (BI)
                  provides that system. BI refers to computer-based techniques
                  used in seeing, gathering information, and analyzing business
                  data, such as sales revenue by products and related to the
                  department’s cost and revenue.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black bg-[#E64936]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-black w-12 h-12 mb-3 inline-block"
                >
                  <path d="M23 12l-4-4v3h-3.14c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H5L2 8v8l3-3h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H19v3l4-4m-11 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                <h2 className="sm:text-3xl text-sm font-medium title-font  mb-4">
                  MIDDLEWARE
                </h2>
                <p className="leading-relaxed mb-28">
                  Middleware enables enterprises to create and run agile,
                  intelligent business applications while maximizing IT
                  efficiency by fully utilizing modern hardware and software
                  architectures.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zM64 245.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.6zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5 0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112 0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80 144c0 16.2 6 31 16 42.3v-84.6c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2 0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg>
                <h2 className="sm:text-3xl text-sm font-medium title-font text-gray-900 mb-4">
                  HUMAN CAPITAL MANAGEMENT
                </h2>
                <p className="leading-relaxed">
                  Support the entire Human Resource lifecycle, including
                  standard mobile, social and business intelligence capabilities
                  with a full complement of security, access control,
                  development, deployment, storage, and content management
                  capabilities.
                </p>
                <div className="flex flex-wrap mb-40">
                  <div className="w-full">
                    <ul
                      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                      role="tablist"
                    >
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (openTab === 1
                              ? "flex-grow text-[#E64936] border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          Talent Centric
                        </a>
                      </li>
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (openTab === 2
                              ? "flex-grow text-[#E64936] border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          Social
                        </a>
                      </li>
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (openTab === 3
                              ? "flex-grow text-[#E64936] border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          Insightful
                        </a>
                      </li>
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (openTab === 4
                              ? "flex-grow text-[#E64936] border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(4);
                          }}
                          data-toggle="tab"
                          href="#link4"
                          role="tablist"
                        >
                          Mobile
                        </a>
                      </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                      <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                          <div
                            className={openTab === 1 ? "block" : "hidden"}
                            id="link1"
                          >
                            <p>Find, grow, and retain the best people.</p>
                          </div>
                          <div
                            className={openTab === 2 ? "block" : "hidden"}
                            id="link2"
                          >
                            <p>
                              Integrate social capabilities to enable
                              collaboration throughout the organization.
                            </p>
                          </div>
                          <div
                            className={openTab === 3 ? "block" : "hidden"}
                            id="link3"
                          >
                            <p>
                              Provide complete workforce insights for every
                              stakeholder.
                            </p>
                          </div>
                          <div
                            className={openTab === 4 ? "block" : "hidden"}
                            id="link4"
                          >
                            <p>
                              Make it easy for everyone to use on every device.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black bg-[#E64936]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-black w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>

                <h2 className="sm:text-3xl text-sm font-medium title-font mb-4">
                  Infrastructure as a service
                </h2>
                <p className="leading-relaxed">
                  Cloud bases provide virtualized computing resources over the
                  Internet. IaaS platforms offer highly scalable resources that
                  can be adjusted on demand. This makes IaaS well-suited for
                  temporary, experimental workloads or changes unexpectedly.
                </p>

                <div className="flex flex-wrap">
                  <div className="w-full">
                    <ul
                      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                      role="tablist"
                    >
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (Tab === 1
                              ? "flex-grow text-white border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setTab(1);
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          High Performance
                        </a>
                      </li>
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (Tab === 2
                              ? "flex-grow text-white border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          Seamless Integration
                        </a>
                      </li>
                      <li className="flex mb-4">
                        <a
                          className={
                            "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" +
                            (Tab === 3
                              ? "flex-grow text-white border-b-2 border-indigo-500 py-2 text-lg px-1"
                              : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setTab(3);
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          Integrate innovative features and services
                        </a>
                      </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white text-black w-full mb-6 shadow-lg rounded">
                      <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                          <div
                            className={Tab === 1 ? "block" : "hidden"}
                            id="link1"
                          >
                            <p>
                              Customize your cloud server’s configuration and
                              get the flexibility you need and the
                              high-performance power you want. Choose
                              multi-tenant or single-tenant, local or SAN
                              storage, by the hour or month.
                            </p>
                          </div>
                          <div
                            className={Tab === 2 ? "block" : "hidden"}
                            id="link2"
                          >
                            <p>
                              With bare metal and virtual servers integrated
                              into a seamless, fully- automated platform to
                              optimize performance and management, you can blur
                              the lines between physical and virtual and move
                              ideas into reality.
                            </p>
                          </div>
                          <div
                            className={Tab === 3 ? "block" : "hidden"}
                            id="link3"
                          >
                            <p>
                              All virtual servers come with comprehensive
                              features and services—one of the industry’s best.
                              With these features included at no additional
                              cost, you can accelerate deployment and optimize
                              your total cost of operations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                <h2 className="sm:text-3xl text-sm font-medium title-font text-gray-900 mb-4">
                  HOSPITAL INTEGRATED INFORMATION SYSTEM
                </h2>
                <p className="leading-relaxed mb-56">
                  Hospital Integrated Information System is a software
                  application designed to meet the demands of computerization of
                  all hospital-related activities, ranging from standard service
                  systems such as patient data collection, service, medical
                  records, medical support, pharmacy, cashier & billing services
                  to managerial reports and information services. PT DINAMIKA
                  VISUAL KREASINDO provides the best solution for hospital
                  efficiency
                </p>
              </div>
            </div>
          </div>
          <h1 className="sm:text-3xl text-2xl py-10 font-medium title-font text-center text-gray-900">
            SERVICES
          </h1>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full ">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                  IT CONSULTANT
                </h2>
                <p className="leading-relaxed mb-20">
                  As an Indonesian consultant, we value teamwork,
                  professionalism, integrity, initiative, and excellent service.
                  With an experienced consultant, we listen and find the best
                  solutions for your company to drive your business forward. A
                  variety of solutions from the planning stage to full
                  implementation, including client-led project management and
                  fully hosted solutions, if that is your preference. Our
                  consultant will help you gain more time and information to use
                  your resources on the tasks that matter, enabling you to grow
                  your business.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>

                <h2 className="sm:text-3xl text-sm font-medium title-font text-gray-900 mb-4">
                  MANAGED AND MAINTENANCE SUPPORT
                </h2>
                <ReadMore>
                  Having to form an IT Department to manage and troubleshoot
                  these desktops and applications might not make sense for an
                  organization. Managing and troubleshooting is usually not a
                  core activity within an organization. With Dinamika Managed
                  Services & Maintenance Support, we take care of entire E2E IT
                  Operations for our customers with a low, predictable monthly
                  fee. Our Managed Services and Maintenance Support pricing are
                  the best in the industry for the services and value offered.
                  We bill our customers on a fixed agreed price with no hidden
                  cost.
                </ReadMore>
                <p className="text-base leading-relaxed my-2">
                  For our customers, we provide managed services and maintenance
                  support as follows:
                </p>

                <p>
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  System Monitoring and Support (onsite/offsite) (L1 and L2)
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Bug fixing (L3)
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Software upgrade (L3)
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Application customization and CR (L3)
                </p>
                <p>
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  System Health Checking and Preventive Maintenance (L3)
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-[#E64936] w-12 h-12 mb-3 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>

                <h2 className="sm:text-3xl text-sm font-medium title-font text-gray-900 mb-4">
                  IMPLEMETATION SERVICES
                </h2>
                <ReadMore>
                  System Implementation, Integration, or Project Management, our
                  world-class and industry-trained professionals are ready to
                  deliver services that exceed your expectations. Through years
                  of experience and multiple industry exposure, Dinamika`s
                  implementation methodology will evolve and adapt to fit your
                  organization`s needs. Our personalized approach will guide the
                  rapidly implementing of the right solution without
                  compromising the project management practices such as risk
                  avoidance, task and time management, quality management,
                  status reporting, milestone management, and scope change
                  management.
                </ReadMore>
                <p>
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Oracle Platinum Partner in Indonesia
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Oracle Siebel Certified Consultant
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Oracle Fusion Middleware Certified{" "}
                  <span className="ml-6">Consultant</span>
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Oracle CRM Cloud Certified Consultant
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Siebel Upgrade Factory ( Pointed by Oracle)
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Salesforce Certified Consultant
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Certified IBM Business Partner
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Full Commitments and Supports
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Proven Methodology and Approach
                </p>
                <p className="my-2">
                  <span className="bg-[#f24425] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
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
                  Knowledgeable and Experienced Consultants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
