"use client"; // Si usas Next.js App Router
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "../common/LanguageToggle"; // Asegúrate de que la ruta sea correcta

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
      <nav className="fixed z-20 flex flex-col items-center justify-between w-full h-auto p-2 overflow-hidden sm:flex-row md:h-24 bg-primario md:pr-12">
        <div className="flex items-center justify-between w-full h-full md:w-auto">
          <Link href="/" className="md:h-44">
            {/* Logo para pantallas pequeñas */}
            <Image
              className="w-auto h-16 md:hidden"
              src="/assets/logos/elizabeth_simbolo_blanco.png"
              alt="logo de la firma"
              width={64}
              height={64}
            />

            {/* Logo para pantallas medianas y grandes */}
            <Image
              className="hidden w-auto md:block md:h-full"
              src="/assets/logos/logo_elizabeth_cedeno.png"
              alt="logo de la firma"
              width={256}
              height={64}
            />
          </Link>

          {/* Botón menú hamburguesa */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="items-center hidden gap-4 text-white sm:flex sm:gap-8">
          <li>
            <Link href="/#nosotros" className="hover:underline">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/#servicios" className="hover:underline">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/#articulos" className="hover:underline">
              Artículos
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              className="flex items-center justify-center h-12 px-4 font-bold text-center bg-white rounded-full w-28 sm:w-36 text-primario"
            >
              Contactar
            </Link>
          </li>
          <li className="w-6">
            <LanguageToggle onChange={handleLanguageChange} />
          </li>
        </ul>

        {/* Menú para pantallas pequeñas */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center justify-center gap-4 mt-4 text-white sm:hidden">
            <li>
              <Link href="/#nosotros" className="hover:underline">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/#servicios" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/#articulos" className="hover:underline">
                Artículos
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                className="flex items-center justify-center h-12 px-4 font-bold text-center bg-white rounded-full w-28 sm:w-36 text-primario"
              >
                Contactar
              </Link>
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
