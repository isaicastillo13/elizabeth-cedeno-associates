import React, { useState } from "react";

export default function Accordion() {
  // Estado para controlar la expansión de las secciones
  const [expanded, setExpanded] = useState(null); // `null` indica que ninguna sección está expandida

  // Función para manejar el clic y alternar la expansión de la sección
  const handleAccordionClick = (index) => {
    setExpanded(expanded === index ? null : index); // Si la misma sección es clickeada, se colapsa
  };

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
    >
      {/* Sección 1 */}
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={expanded === 0} // Establece si está expandido o no
          aria-controls="accordion-color-body-1"
          onClick={() => handleAccordionClick(0)} // Controla el clic para expandir o colapsar
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${expanded === 0 ? "rotate-180" : ""}`} // Añade rotación si está expandido
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
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className={`transition-all duration-300 ${expanded === 0 ? "block" : "hidden"}`} // Controla la visibilidad
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
              get started
            </a>{" "}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Puedes agregar más secciones aquí de manera similar, solo cambiando el índice y el id */}
      {/* Sección 2 */}
      <h2 id="accordion-color-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={expanded === 1}
          aria-controls="accordion-color-body-2"
          onClick={() => handleAccordionClick(1)} // Sección 2
        >
          <span>Is there a Figma file available?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${expanded === 1 ? "rotate-180" : ""}`}
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
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        className={`transition-all duration-300 ${expanded === 1 ? "block" : "hidden"}`}
        aria-labelledby="accordion-color-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={expanded === 2}
          aria-controls="accordion-color-body-3"
          onClick={() => handleAccordionClick(2)} // Sección 3
        >
          <span>What are the differences between Flowbite and Tailwind UI?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${expanded === 2 ? "rotate-180" : ""}`}
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
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        className={`transition-all duration-300 ${expanded === 2 ? "block" : "hidden"}`}
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
