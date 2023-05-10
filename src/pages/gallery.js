import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bg from "../assets/gallery.webp";
import Bg1 from "../assets/gallery1.webp";
import Bg2 from "../assets/gallery2.webp";
import Bg3 from "../assets/gallery3.webp";
import Bg4 from "../assets/gallery4.webp";
import Bg5 from "../assets/gallery5.webp";
import Image from "next/image";

const gallery = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="text-gray-600 body-font">
        <div className="container  py-10 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              GALLERY
            </h1> */}
            <p className=" lg:w-2/3 leading-relaxed text-base">
              WIKA ARIS Business Process Modeling Training
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 rounded-md">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded-md"
                  src={Bg}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={Bg1}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={Bg2}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={Bg3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={Bg4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width=""
                  height=""
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={Bg5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default gallery;
