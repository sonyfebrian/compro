import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/logo_r.png";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const router = useRouter();
  const currentRoute = router.pathname;
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setnavColor("rgba(39, 35, 64, 0.8)")
      : setnavColor("transparent");
    window.scrollY > 20 ? setnavSize("10rem") : setnavSize("8rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {" "}
      <header
        className="fixed top-0 w-full  z-50  w-full pt-1"
        style={{
          backgroundColor: navbarOpen === true ? "#272340" : navColor,
          height: navbarOpen === true ? navSize : "5rem",
          transition: "all 1s",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap p-1 flex-col md:flex-row">
          <div className="flex flex-row items-center justify-between p-3 md:p-1">
            <div className="sm:mb-0 flex flex-row">
              <div className="h-14 w-10 self-center mr-2 mt-5">
                <Image
                  alt="logo"
                  width="10px"
                  height="10px"
                  src={Logo}
                  className="self-center"
                  // src="https://csscomps.com/images/csscomps.png"
                />
              </div>
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-2xl no-underline uppercase text-[#E64936] hover:text-blue-dark font-sans font-bold"
                >
                  Rafas
                </Link>

                {/* <p className="text-xs text-white">VISUAL KREASINDO</p> */}
              </div>
            </div>
            <button
              className="cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
              type="button"
              aria-label="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div className="md:ml-auto md:mr-auto pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-end">
              <Link
                href="/"
                // className="mr-4 pr-2 text-sm uppercase cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
                className={
                  currentRoute === "/"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                Home
              </Link>

              <Link
                href="/vision"
                className={
                  currentRoute === "/vision"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                who we are
              </Link>
              <Link
                href="/product"
                className={
                  currentRoute === "/product"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mx-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                what we do
              </Link>
              <Link
                href="/dinamika"
                className={
                  currentRoute === "/dinamika"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                why rafas
              </Link>
              <Link
                href="customer"
                className={
                  currentRoute === "/customer"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                customers
              </Link>
              <Link
                href="/gallery"
                className={
                  currentRoute === "/gallery"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                gallery
              </Link>
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                contact
              </Link>

              <Link
                href="/career"
                className={
                  currentRoute === "/career"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#E64936] border-b-2 border-[#E64936] p-1 hover:text-[#E64936] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                career
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
