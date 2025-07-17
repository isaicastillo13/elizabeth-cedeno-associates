import React from "react";
import Image from "next/image";


function Hero() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen gap-10 p-10 text-center">
        <h1 className="flex flex-col items-start justify-start mb-4 text-4xl font-bold text-left sm:text-5xl md:text-6xl lg:text-[50px]">
          Blog Legal: Guías prácticas, análisis y consejos de expertos en
          derecho en Panamá
        </h1>
        <p className="flex items-start justify-start text-left text-sm md:text-base lg:text-[18px] text-secundario">
          Descubra artículos claros y actualizados sobre derecho panameño,
          cumplimiento normativo, trámites legales, y consejos prácticos para
          empresas y personas. Escrito por abogados especializados que entienden
          la realidad local.
        </p>
         <hr className="w-full my-4 border-t-2 border-gray-300" />
      </div>
    </>
  );
}

export default Hero;
