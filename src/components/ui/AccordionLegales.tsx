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
        Servicios <span className="font-bold">Legales</span>
      </h1>
      {/* Sección 1 */}
      <div>
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 0} // Establece si está expandido o no
            aria-controls="accordion-color-body-1"
            onClick={() => handleAccordionClick(0)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold">
              Contrataciones publicas en Panama
            </span>
            <svg
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
            </svg>
          </button>
        </h2>

        <div
          id="accordion-color-body-1"
          className={`transition-all duration-300 ${
            expanded === 0 ? "block" : "hidden"
          }`} // Controla la visibilidad
          aria-labelledby="accordion-color-heading-1"
        >
          <div className="p-6 dark:bg-gray-900">
            <ul className="mb-4 list-disc list-inside text-gray-500 dark:text-gray-400">
              <li className="mb-7">
                Estrategia de licitación con base en los pliegos o documentos de
                la licitación.
              </li>
              <li className="mb-7">
                Revisión de pliegos y/o solicitud de propuesta u oferta,
                revisión y asesoramiento para elaboración de propuestas técnicas
                y económicas.
              </li>
              <li className="mb-7">
                Negociación, elaboración y/o revisión de contratos bajo la ley
                nacional panameña y políticas de organismos internacionales
                (BID, Banco Mundial, CAF, entre otros).
              </li>
              <li className="mb-7">
                Elaboración y revisión de adendas, cesiones, ejecución de
                fianzas y liquidación de contratos.
              </li>
              <li className="mb-7">
                Asesoramiento para trámite de concesiones con el Estado
                panameño.
              </li>
              <li className="mb-7">
                Estrategia legal para la defensa ante demandas o acciones
                judiciales relacionadas con contratos públicos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 1} // Establece si está expandido o no
            aria-controls="accordion-color-body-2"
            onClick={() => handleAccordionClick(1)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Establecimiento y acompañamiento de inversiones en Panamá:
            </span>
            <svg
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
            </svg>
          </button>
        </h2>

        <div
          id="accordion-color-body-2"
          className={`transition-all duration-300 ${
            expanded === 1 ? "block" : "hidden"
          }`} // Controla la visibilidad
          aria-labelledby="accordion-color-heading-2"
        >
          <div className="p-6 dark:bg-gray-900">
            <ul className="mb-4 list-disc list-inside text-gray-500 dark:text-gray-400">
              <li className="mb-7">
                Leyes de incentivos para inversiones en Proyectos de desarrollo
                turístico, Proyectos de movilidad eléctrica, Proyectos de
                energías renovables y otros.
              </li>
              <li className="mb-7">
                Establecimiento de empresas SEM (Sedes de Empresas
                Multinacionales), EMMA (Empresa Multinacional para la Prestación
                de Servicios Relacionados con la Manufactura), en zonas francas
                y económicas especiales.
              </li>
              <li className="mb-7">
                Asesoramiento para la creación y funcionamiento de APPs
                (Asociaciones Público Privadas) en Panamá.
              </li>
              <li className="mb-7">
                Asesoramiento y trámite de visas para los inversionistas:
              </li>
              <li className="mb-7">
                Asesoramiento y trámite de visas para los inversionistas:
                <ul className="list-item list-inside ml-6 mt-2">
                  <li>Inversionistas</li>
                  <li>Nómadas digitales</li>
                  <li>Ejecutivos de empresas</li>
                  <li>Dependientes</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sección 3 */}
      <div>
        <h2 id="accordion-color-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 2} // Establece si está expandido o no
            aria-controls="accordion-color-body-3"
            onClick={() => handleAccordionClick(2)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Negociación y administración de contratos
            </span>
            <svg
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
            </svg>
          </button>
        </h2>

        <div
          id="accordion-color-body-3"
          className={`transition-all duration-300 ${
            expanded === 2 ? "block" : "hidden"
          }`} // Controla la visibilidad
          aria-labelledby="accordion-color-heading-3"
        >
          <div className="p-6 dark:bg-gray-900">
            <ul className="mb-4 list-disc list-inside text-gray-500 dark:text-gray-400">
              <li className="mb-7">
                Elaboración y negociación de contratos de construcción,
                arrendamiento, compraventa, de servicios, de concesión, de
                suministros, de cesión, de transporte, de permuta, de mandato
                otros de naturaleza comercial.
              </li>
              <li className="mb-7">
                Asesoramiento en temas de uso de suelo, ordenamiento
                territorial, la obtención de permisos y el cumplimiento de la
                normativa medioambiental para proyectos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección 5 */}
      <div>
        <h2 id="accordion-color-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 3} // Establece si está expandido o no
            aria-controls="accordion-color-body-3"
            onClick={() => handleAccordionClick(3)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Resolución de conflictos: Negociación, Mediación y Conciliación.
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
      {/* Sección 5 */}
      <div>
        <h2 id="accordion-color-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 focus:border-rose-100 dark:border-gray-700 dark:text-gray-400 hover:bg-rose-100 dark:hover:bg-gray-800 gap-3"
            aria-expanded={expanded === 4} // Establece si está expandido o no
            aria-controls="accordion-color-body-3"
            onClick={() => handleAccordionClick(4)} // Controla el clic para expandir o colapsar
          >
            <span className="uppercase font-bold text-left">
              Opiniones legales sobre la ley panameña y tratados
              internacionales.
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
