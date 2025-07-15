import React, { useState } from "react";

export default function Accordion() {
  // Estado para controlar la expansión de las secciones
  const [expanded, setExpanded] = useState<number | null>(null); // `null` indica que ninguna sección está expandida

  // Función para manejar el clic y alternar la expansión de la sección
  const handleAccordionClick = (index: number) => {
    setExpanded(expanded === index ? null : index); // Si la misma sección es clickeada, se colapsa
  };

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl p-6 group"
    >

      <h1 className="text-3xl mb-4 text-primario 0 dark:text-white uppercase text-center">
        Servicios <span className="font-bold">De Consultoria</span>
      </h1>
      {/* Sección 1 */}
      <div>
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 0} // Establece si está expandido o no
            aria-controls="accordion-color-body-1"
            // onClick={() => handleAccordionClick(0)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Estructuración y evaluación de proyectos privados y públicos
            </span>
            {/* <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                expanded === 0 ? "rotate-180" : ""
              }`} // Añade rotación si está expandido
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg> */}
          </button>
        </h2>
      </div>

      {/* Sección 2 */}
      <div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 1} // Establece si está expandido o no
            aria-controls="accordion-color-body-2"
            // onClick={() => handleAccordionClick(1)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Supervisión y administración de proyectos
            </span>
            {/* <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                expanded === 1 ? "rotate-180" : ""
              }`} // Añade rotación si está expandido
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg> */}
          </button>
        </h2>
      </div>
      {/* Sección 3 */}
      <div>
        <h2 id="accordion-color-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 2} // Establece si está expandido o no
            aria-controls="accordion-color-body-3"
            // onClick={() => handleAccordionClick(2)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Gerencia de proyectos
            </span>
            {/* <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                expanded === 2 ? "rotate-180" : ""
              }`} // Añade rotación si está expandido
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg> */}
          </button>
        </h2>
      </div>

      {/* Sección 5 */}
      <div>
        <h2 id="accordion-color-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 3} // Establece si está expandido o no
            aria-controls="accordion-color-body-3"
            // onClick={() => handleAccordionClick(3)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
             PLANIFICACIÓN ESTRATEGICA
            </span>
            {/* <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                expanded === 3 ? "rotate-180" : ""
              }`} // Añade rotación si está expandido
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg> */}
          </button>
        </h2>
      </div>
    </div>
  );
}
