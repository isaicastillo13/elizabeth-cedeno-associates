"use client"; // Si usas Next.js App Router
import Image from "next/image";
import LanguageToggle from "./LanguageToggle/LanguageToggle"; // Asegúrate de que la ruta sea correcta


import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cambiar el idioma
  const handleLanguageChange = (lang: string) => {
    console.log("Idioma cambiado a:", lang);
    // Aquí puedes disparar tu función de traducción (i18n, custom, etc)
  };

  return (
    <header className="w-full">
      <nav className="fixed z-20 flex flex-col sm:flex-row justify-between items-center w-full h-auto md:h-24 bg-primario p-2 md:pr-12 overflow-hidden">
        <div className="flex justify-between items-center h-full md:w-auto w-full">
          <a href="#inicio" className="md:h-44">

            {/* Logo para pantallas pequeñas */}
            <Image
              className="h-16 w-auto md:hidden"
              src="/assets/logos/elizabeth_simbolo_blanco.png"
              alt="logo de la firma"
              width={64}
              height={64}
            />

            {/* Logo para pantallas medianas y grandes */}
            <Image
              className="hidden md:block md:h-full w-auto"
              src="/assets/logos/logo_elizabeth_cedeno.png"
              alt="logo de la firma"
              width={256}
              height={64}
            />
          </a>

          {/* Botón menú hamburguesa */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden sm:flex items-center gap-4 sm:gap-8 text-white">
          <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
          <li><a href="#servicios" className="hover:underline">Servicios</a></li>
          <li><a href="#articulos" className="hover:underline">Artículos</a></li>
          <li>
            <a
              href="#contacto"
              className="flex justify-center items-center w-28 sm:w-36 h-12 px-4 text-center rounded-full bg-white font-bold text-primario"
            >
              Contactar
            </a>
          </li>
          <li className="w-6">
            <LanguageToggle onChange={handleLanguageChange} />
          </li>
        </ul>

        {/* Menú para pantallas pequeñas */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center justify-center text-white sm:hidden mt-4 gap-4">
            <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#articulos" className="hover:underline">Artículos</a></li>
            <li>
              <a
                href="#contacto"
                className="flex justify-center items-center w-28 sm:w-36 h-12 px-4 text-center rounded-full bg-white font-bold text-primario"
              >
                Contactar
              </a>
            </li>
            <li>
              <LanguageToggle onChange={handleLanguageChange} />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
