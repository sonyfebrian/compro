import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroLogo from "../assets/hero.png";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="hero relative">
        {/* <Carousel>
          <Carousel.Item>
            <Image
              width="400px"
              height=""
              src={HeroLogo}
              alt="houses on the water"
              className="w-full"
            />
            <Carousel.Caption>
              <div className="heading-container absolute flex justify-center items-center w-full">
                <h1 className="text-5xl text-white">
                  Your dream vacation starts here
                </h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="400px"
              height=""
              src={HeroLogo}
              alt="houses on the water"
              className="w-full"
            />
            <Carousel.Caption>
              <div className="heading-container absolute flex justify-center items-center w-full">
                <h1 className="text-5xl text-white">
                  Your dream vacation starts heresadasdasdasdasdasdasdasd
                </h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <Image
          width="400px"
          height=""
          src={HeroLogo}
          alt="houses on the water"
          className="w-full"
        />
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className=" text-5xl text-center ">WIJAYA KARYA – BPM</p>
          <p className="text-base text-center mt-2">
            We bring solution htmlFor construction business throught Business
            Process Modeling
          </p>
        </div>
      </section>
    </>
  );
}
