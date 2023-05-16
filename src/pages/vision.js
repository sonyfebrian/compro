import Image from "next/image";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Bg from "../assets/1.webp";
import Bg1 from "../assets/2.png";
import Bg2 from "../assets/3.webp";
import Bg3 from "../assets/4.webp";
import Bg4 from "../assets/5.png";
import BgMobile from "../assets/mobile.webp";

export default function gallery() {
  return (
    <>
      <Header />

      <Hero />
      <div className="hidden md:block">
        {" "}
        <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 relative -mt-16">
          <div className="grid gap-4 mx-auto ">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg3}
                alt=""
              />
            </div>
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg1}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4 mx-4">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg2}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4 mx-auto">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg4}
                alt=""
              />
            </div>
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        {" "}
        <div className="flex flex-wrap mt-10 md:-m-2 -m-1 justify-center">
          <div className="flex flex-wrap w-2/3">
            <div className="md:p-2 p-1 w-1/3">
              <div className="grid gap-4 mx-auto">
                <Image
                  height=""
                  width=""
                  className="h-auto max-w-full rounded-lg"
                  src={Bg3}
                  alt=""
                />

                <Image
                  height=""
                  width=""
                  className="h-auto max-w-full rounded-lg"
                  src={Bg1}
                  alt=""
                />
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <Image
                height=""
                width=""
                className="w-full object-cover h-full object-center block rounded-md"
                src={BgMobile}
                alt=""
              />
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <div className="grid gap-4 mx-auto">
                <Image
                  height=""
                  width=""
                  className="w-full object-cover h-full object-center block"
                  src={Bg4}
                  alt=""
                />

                <Image
                  height=""
                  width=""
                  className="h-auto max-w-full rounded-lg"
                  src={Bg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-14">
        <h1 className="title-font uppercase text-lg font-extrabold text-[#E64936] mb-3">
          who we are
        </h1>
        <p className="leading-relaxed mb-3 text-gray-600">
          In a constantly evolving life and growing complexity, information
          technology is needed to meet the challenges of these developments.
          Information technology has the main objective of simplifying human
          activities and giving a solution for every problem in life. We built
          PT. RAFAS DIGITAL KREASI based on enthusiasm and a strong commitment
          among its founders to providing solutions to all our client’s business
          activities. We offer a solution in the form of information technology,
          which we believe will be very useful and the best solution to any
          problem in the growing complexity of any existing business. RAFAS
          DIGITAL KREASI offers a solution in the form of information
          technology. Our company has important primary values: quality of
          services, punctuality, and client satisfaction. Therefore the purpose
          of our company is to play a role in facilitating and making all our
          client’s business activities more efficient. In addition, our company
          will also align with similar companies to optimize our ability to
          serve all the client’s needs. We have professional and qualified
          management and a competent technical team in their field. Thus we
          believe that our companies can compete actively, both nationally and
          globally, in the information technology industry.
        </p>
        <p className="leading-relaxed mb-3 text-gray-600">
          Information Technology is a field which will never stop growing as
          long as the life and activities of human still exist. That’s why
          business in Information Technology is one of the businesses which has
          the most rapid development; due to its highly competition and
          innovation. PT. RAFAS DIGITAL KREASI emphasizes the uniqueness that is
          different from its peers. So we dare to be at the forefront of the
          development of Information Technology business competition. With our
          experience and portfolio, as well as good relations with an extensive
          network, PT. RAFAS DIGITAL KREASI is ready to continue to grow. Our
          main focus is to build and maintain a good reputation, and to increase
          profitability based on our target.
        </p>
        <p className="leading-relaxed mb-3 text-gray-600">
          Information Technology is a field which will always grow as long as
          the life and activities of humans still exist. That’s why business in
          Information Technology is one of the most rapidly developed
          businesses; due to its high competition and innovation. PT. RAFAS
          DIGITAL KREASI emphasizes the uniqueness that is different from its
          peers. So we dare to be at the forefront of the development of
          Information Technology business competition with our experience,
          portfolio, and good relations with an extensive network, PT. RAFAS
          DIGITAL KREASI is ready to continue to grow. Our main focus is to
          build and maintain a good reputation and to increase profitability
          based on our target.
        </p>
        <h1 className="title-font uppercase text-lg font-extrabold text-[#E64936] mb-3 ">
          Vision
        </h1>
        <p className="leading-relaxed mb-3 text-gray-600">
          Be the best, trustable, and most reputable IT Company that can provide
          integrated and sustainable solutions in the field of information
          technology globally.
        </p>
        <h1 className="title-font uppercase text-lg font-extrabold text-[#E64936] mb-3">
          Mission
        </h1>
        <p className="leading-relaxed mb-3 text-gray-600">
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
          Provide the best solutions in information technology as an added value
          for your business.
        </p>
        <p className="leading-relaxed mb-3 text-gray-600">
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
          Provide brilliant services and solutions based on the best information
          technology innovation.
        </p>
        <p className="leading-relaxed mb-3 text-gray-600">
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
          Provide the best solutions in the field of information technology,
          which helps you address future business challenges.
        </p>
      </div>
      <Footer />
    </>
  );
}
