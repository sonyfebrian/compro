import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/logo.png";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const router = useRouter();
  const currentRoute = router.pathname;
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor("#000000") : setnavColor("transparent");
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
          backgroundColor: navbarOpen === true ? "#27313f" : navColor,
          height: navbarOpen === true ? navSize : "5rem",
          transition: "all 1s",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap p-1 flex-col md:flex-row">
          <div className="flex flex-row items-center justify-between p-3 md:p-1">
            <div className="sm:mb-0 flex flex-row">
              <div className="h-14 w-10 self-center mr-2">
                <Image
                  alt="logo"
                  width="10px"
                  height="10px"
                  src={Logo}
                  className="self-center"
                  // src="https://csscomps.com/images/csscomps.png"
                />
              </div>
              <div>
                <Link
                  href="/"
                  className="text-2xl no-underline uppercase text-[#662d91] hover:text-blue-dark font-sans font-bold"
                >
                  Dinamika
                </Link>

                <p className="text-xs text-white">VISUAL KREASINDO</p>
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
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                Home
              </Link>
              <Link
                href="/vision"
                className={
                  currentRoute === "/vision"
                    ? "text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF]  hover:text-[#00FFFF] font-semibold"
                    : "text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                who we are
              </Link>
              <Link
                href="/product"
                className={
                  currentRoute === "/product"
                    ? "mx-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF]  hover:text-[#00FFFF] font-semibold"
                    : "mx-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                what we do
              </Link>
              <Link
                href="/dinamika"
                className={
                  currentRoute === "/dinamika"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                why dinamika
              </Link>
              <Link
                href="customer"
                className={
                  currentRoute === "/customer"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                customers
              </Link>
              <Link
                href="/gallery"
                className={
                  currentRoute === "/gallery"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                gallery
              </Link>
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
                    : "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#C0C0C0] hover:text-white font-semibold tr04"
                }
              >
                contact
              </Link>

              <Link
                href="/career"
                className={
                  currentRoute === "/career"
                    ? "mr-4 pr-2 text-sm uppercase cursor-pointer text-[#00FFFF] border-b-2 border-[#00FFFF] p-1 hover:text-[#00FFFF] font-semibold tr04"
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
