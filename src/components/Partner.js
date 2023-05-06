import LogoAge from "../assets/Ag.jpg";
import LogoIsystem from "../assets/isystem.jpg";
import Image from "next/image";

export default function Partner() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-8 mx-auto max-w-screen-xl px-1">
          <h2 className="mb-1 lg:mb-1 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            INIDIGI PARTNER
          </h2>
          <p className="leading-relaxed text-base text-center mb-4">
            Meet our Professional Partner
          </p>
          <div>
            <div className="flex justify-center items-center">
              <Image src={LogoAge} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
