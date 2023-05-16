import Head from "next/head";

import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import About from "@/components/About";
import Partner from "@/components/Partner";
import Value from "@/components/Value";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Rafas Digital Kreasi"
        description="Rafas Digital Kreasi"
      />
      <Head>
        <title>Rafas Digital Kreasi</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ScrollToTop smooth />
      <Navbar />
      <Hero />

      <Service />
      <About />
      <Partner />
      <Value />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
