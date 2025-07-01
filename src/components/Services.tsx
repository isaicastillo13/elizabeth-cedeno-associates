"use client";

import Image from "next/image";
import { root } from "postcss";
import React, { use } from "react";
import AccordionsLegal from "@/components/ui/AccordionLegales";
import AccordionsConsultoria from "@/components/ui/AccordionConsultoria";

const Services = () => {
  const [state, setState] = React.useState("close");
  const [state2, setState2] = React.useState("close");

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

  const openAccordions2 = () => {
    console.log("State:", state2);

    if (state2 === "close") {
      console.log("Open accordions");
      setState2("open");
    } else if (state2 === "open") {
      console.log("Close accordions");
      setState2("close");
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
          } accordions-content w-full h-full bg-white z-10 transition-all duration-500 ease-in-out flex flex-col justify-start items-center p-8`}
        >
          <AccordionsLegal />
          <button type="button" onClick={openAccordions} className={`text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Cerrar</button>
          
        </div>


        <div
          className={`servicios-content flex justify-center items-end relative transition-opacity duration-500 ease-in-out opacity-100 ${console.log(
            state2
          )} ${state2 === "open" ? "hidden" : "block"}`} // Adjusted to use template literals
          id="legales-section"
        >
          {/* <img src="./assets/img/fondo_legales.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" /> */}
          <Image
            src="/assets/image/fondo_consultoria.jpg"
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
              CONSULTORIA
            </h3>
            {/* <img src="./assets/img/icons/plus.png" className="w-12 h-12" alt="" /> */}

            <button onClick={openAccordions2}>
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
          className={`${console.log(state2)} ${
            state2 === "open" ? "block" : "hidden"
          } accordions-content w-full h-full bg-white z-10 transition-all duration-500 ease-in-out flex flex-col justify-start items-center p-8`}
        >
          <AccordionsConsultoria />

          <button type="button" onClick={openAccordions2} className={`text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Cerrar</button>
        </div>

     
      </section>
    </>
  );
};

export default Services;
