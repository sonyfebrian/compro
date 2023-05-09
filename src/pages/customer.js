import Image from "next/image";
import Bg from "../assets/customer.webp";
import Bg1 from "../assets/customer1.webp";
import Bg2 from "../assets/customer2.webp";
import Bg3 from "../assets/customer3.webp";
import Bg4 from "../assets/customer4.webp";
import Bg5 from "../assets/customer5.webp";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const customer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              CUSTOMERS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Professionalism is our principle to provide satisfaction to our
              clients
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="600px"
                  height="360px"
                  alt="gallery"
                  className="inset-0 w-full h-full object-cover object-center"
                  src={Bg}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="601px"
                  height="361px"
                  alt="gallery"
                  className="inset-0 w-full h-full object-cover object-center"
                  src={Bg1}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="603px"
                  height="363px"
                  alt="gallery"
                  className="inset-0 w-full h-full object-cover object-center"
                  src={Bg2}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="602px"
                  height="362px"
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={Bg3}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="605px"
                  height="365"
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width="606px"
                  height="366px"
                  alt="gallery"
                  className="inset-0 w-full h-full object-cover object-center"
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

export default customer;
