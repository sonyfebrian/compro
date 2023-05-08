// import Image from "next/image";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import Bg from "../assets/1.webp";
// import Bg1 from "../assets/2.png";
// import Bg2 from "../assets/3.webp";
// import Bg3 from "../assets/4.webp";
// import Bg4 from "../assets/5.png";

export default function gallery() {
  return (
    <>
      <Header />
      <Hero />
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  width="606px"
                  height="306px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
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
                  alt="gallery"
                  width="601px"
                  height="361px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
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
                  alt="gallery"
                  width="603px"
                  height="363px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
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
                  alt="gallery"
                  width="602px"
                  height="302px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
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
                  alt="gallery"
                  width="605px"
                  height="305px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg3}
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
                  alt="gallery"
                  width="606px"
                  height="306px"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bg4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
          <div className="grid gap-4">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg}
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
          <div className="grid gap-4">
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
          <div className="grid gap-4">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg}
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
          <div className="grid gap-4">
            <div>
              <Image
                height=""
                width=""
                className="h-auto max-w-full rounded-lg"
                src={Bg}
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
        </div>
      </section> */}
      <Footer />
    </>
  );
}
