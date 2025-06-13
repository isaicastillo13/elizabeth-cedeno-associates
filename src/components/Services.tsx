"use client";

import Image from "next/image";
import { root } from "postcss";
import React, { use } from "react";
import Accordions from "@/components/ui/Accordion";

const Services = () => {
  const [state, setState] = React.useState("close");

  const openAccordions = () => {
    console.log("State:", state);

    if (state === "close") {
      console.log("Open accordions");
      setState("open");
    } else if (state === "open") {
      console.log("Close accordions");
      setState("close");
    }
  };

  return (
    <>
      <section
        className="grid md:grid-cols-2 sm:grid-cols-1 h-screen md:mb-32 overflow-hidden mb-40"
        id="servicios"
      >
        <div
          className={`servicios-content flex justify-center items-end relative transition-opacity duration-500 ease-in-out opacity-100 ${console.log(
            state
          )} ${state === "open" ? "hidden" : "block"}`} // Adjusted to use template literals
          id="legales-section"
        >
          {/* <img src="./assets/img/fondo_legales.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" /> */}
          <Image
            src="/assets/image/fondo_legales.jpg"
            alt="Fondo Legales"
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 w-full h-full bg-primario bg-opacity-50"></div>
          <div
            className="absolute flex flex-col gap-4 justify-center items-center bottom-1/4 z-10 cursor-pointer"
            id="showLegalesAccordion"
          >
            <h3
              className="text-white font-bold text-3xl"
              data-translate="legales"
            >
              LEGALES
            </h3>
            {/* <img src="./assets/img/icons/plus.png" className="w-12 h-12" alt="" /> */}

            <button onClick={openAccordions}>
              <Image
                src="/assets/icons/plus.png"
                className="w-12 h-12"
                alt="Plus"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
        <div
          className={`${console.log(state)} ${
            state === "open" ? "block" : "hidden"
          } accordions-content w-full h-full bg-white z-20 transition-all duration-500 ease-in-out `}
        >
          <Accordions />
        </div>

        <div
          className="servicios-content flex justify-center items-end relative transition-opacity duration-500 ease-in-out opacity-100"
          id="consultoria-section"
        >
          {/* <img src="./assets/img/fondo_consultoria.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" /> */}
          <Image
            src="/assets/image/fondo_consultoria.jpg"
            alt="Fondo Consultoría"
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 w-full h-full bg-primario bg-opacity-50"></div>
          <div
            className="absolute flex flex-col gap-4 justify-center items-center bottom-1/4 z-10 cursor-pointer"
            id="showConsultoriaAccordion"
          >
            <h3
              className="text-white font-bold text-3xl uppercase"
              data-translate="consultoria"
            >
              Consultoría
            </h3>
            {/* <img src="./assets/icons/plus.png" className="w-12 h-12" alt="" /> */}
            <Image
              src="/assets/icons/plus.png"
              className="w-12 h-12"
              alt="Plus"
              width={48}
              height={48}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
