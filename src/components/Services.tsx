import Image from "next/image";

const Services = () => {
    return (
        <>
         <section className="grid md:grid-cols-2 sm:grid-cols-1 h-screen md:mb-32 overflow-hidden mb-40" id="servicios">

    <div
      className="servicios-content flex justify-center items-end relative transition-opacity duration-500 ease-in-out opacity-100"
      id="legales-section">
      {/* <img src="./assets/img/fondo_legales.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" /> */}
        <Image src="/assets/image/fondo_legales.jpg" alt="Fondo Legales" className="absolute top-0 left-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 w-full h-full bg-primario bg-opacity-50"></div>
      <div className="absolute flex flex-col gap-4 justify-center items-center bottom-1/4 z-10 cursor-pointer"
        id="showLegalesAccordion">
        <h3 className="text-white font-bold text-3xl" data-translate="legales">LEGALES</h3>
        {/* <img src="./assets/img/icons/plus.png" className="w-12 h-12" alt="" /> */}
        <Image src="/assets/icons/plus.png" className="w-12 h-12" alt="Plus" width={48} height={48} />
      </div>
    </div>


    <div
      className="servicios-content flex justify-center items-end relative transition-opacity duration-500 ease-in-out opacity-100"
      id="consultoria-section">
      {/* <img src="./assets/img/fondo_consultoria.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" /> */}
        <Image src="/assets/image/fondo_consultoria.jpg" alt="Fondo Consultoría" className="absolute top-0 left-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 w-full h-full bg-primario bg-opacity-50"></div>
      <div className="absolute flex flex-col gap-4 justify-center items-center bottom-1/4 z-10 cursor-pointer"
        id="showConsultoriaAccordion">
        <h3 className="text-white font-bold text-3xl uppercase" data-translate="consultoria">Consultoría</h3>
        {/* <img src="./assets/icons/plus.png" className="w-12 h-12" alt="" /> */}
        <Image src="/assets/icons/plus.png" className="w-12 h-12" alt="Plus" width={48} height={48} />
      </div>
    </div>


    <div
      className="accordion-content hidden justify-center items-center relative transition-opacity duration-500 ease-in-out overflow-y-auto"
      id="legales-accordion" style={{ maxHeight: "calc(100vh - 4rem)" }}>
      <div className="w-full p-6 flex flex-col">
        <div className="flex justify-end mb-4">
          {/* <img id="closeLegalesAccordion" className="w-5 h-auto cursor-pointer" src="./assets/img/icons/close_button.png" alt="" /> */}
            <Image id="closeLegalesAccordion" className="w-5 h-auto cursor-pointer" src="/assets/icons/close_button.png" alt="Cerrar" width={20} height={20} />
        </div>
        <h2 className="text-center uppercase text-primario text-4xl mb-4">
          <span data-translate="servicios_legales">
            Servicios
          </span>
          <strong data-translate="servicios_legales_strong">Legales</strong>
          <br />
        </h2>

        <div className="accordion flex flex-col">

          <div className="accordion-item mb-2">
            <button
              className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
              {/* <img className="w-5 h-auto rotate-45" src="./assets/img/icons/close_button.png" alt="" /> */}
              <Image src="/assets/icons/close_button.png" className="w-5 h-auto rotate-45" alt="Cerrar" width={20} height={20} />
              <span data-translate="contrataciones_publicas">Contrataciones públicas en Panamá</span>
            </button>
            <div className="accordion-content hidden p-4 text-secundario text-justify">
              <li className="mb-4" data-translate="estrategia_licitacion">
                Estrategia de licitación con base en los pliegos o documentos de la licitación.
              </li>
              <li className="mb-4" data-translate="revision_pliegos">
                Revisión de pliegos y/o solicitud de propuesta u oferta, revisión y asesoramiento para elaboración de
                propuestas técnicas y económicas.
              </li>
              <li className="mb-4" data-translate="negociacion_contratos">
                Negociación, elaboración y/o revisión de contratos bajo la ley nacional panameña y políticas de
                organismos internacionales (BID, Banco Mundial, CAF, entre otros).
              </li>
              <li className="mb-4" data-translate="elaboracion_adendas">
                Elaboración y revisión de adendas, cesiones, ejecución de fianzas y liquidación de contratos.
              </li>
              <li className="mb-4" data-translate="asesoramiento_concesiones">
                Asesoramiento para trámite de concesiones con el Estado panameño.
              </li>
              <li data-translate="estrategia_defensa">
                Estrategia legal para la defensa ante demandas o acciones judiciales relacionadas con contratos
                públicos.
              </li>
            </div>
          </div>


          <div className="accordion-item mb-2">
            <button
              className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
              {/* <img className="w-5 h-auto rotate-45" src="./assets/img/icons/close_button.png" alt="" /> */}
                <Image src="/assets/icons/close_button.png" className="w-5 h-auto rotate-45" alt="Cerrar" width={20} height={20} />
              <span data-translate="inversiones_panama">Establecimiento y acompañamiento de inversiones en Panamá</span>
            </button>
            <div className="accordion-content hidden p-4 text-secundario text-justify">
              <li className="mb-4" data-translate="leyes_incentivos">
                Leyes de incentivos para inversiones en Proyectos de desarrollo turístico, Proyectos de movilidad
                eléctrica, Proyectos de energías renovables y otros.
              </li>
              <li className="mb-4" data-translate="establecimiento_empresas">
                Establecimiento de empresas SEM (Sedes de Empresas Multinacionales), EMMA (Empresa Multinacional para la
                Prestación de Servicios Relacionados con la Manufactura), en zonas francas y económicas especiales.
              </li>
              <li className="mb-4" data-translate="Asesoramiento_apps">
                Asesoramiento para la creación y funcionamiento de APPs (Asociaciones Público Privadas) en Panamá.
              </li>

              <li data-translate="asesoramiento_tramite_visas">
                Asesoramiento y trámite de visas para los inversionistas:
              </li>
              <ol className="list-disc list-inside">
                <li data-translate="inversionistas">Inversionistas</li>
                <li data-translate="nomadas_digitales">Nómadas digitales</li>
                <li data-translate="ejecutivos_empresas">Ejecutivos de empresas</li>
                <li data-translate="dependientes">Dependientes</li>
                <li data-translate="otros">Otros</li>
              </ol>
            </div>
          </div>


          <div className="accordion-item mb-2">
            <button
              className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
              {/* <img className="w-5 h-auto rotate-45" src="./assets/img/icons/close_button.png" alt="" /> */}
                <Image src="/assets/icons/close_button.png" className="w-5 h-auto rotate-45" alt="Cerrar" width={20} height={20} />
              <span data-translate="negociacion_administracion_contratos">Negociación y administración de
                contratos</span>
            </button>
            <div className="accordion-content hidden p-4 text-secundario text-justify">
              <li className="mb-4" data-translate="elaboracion_negociacion_contratos">
                Elaboración y negociación de contratos de construcción, arrendamiento, compraventa, de servicios, de
                concesión, de suministros, de cesión, de transporte, de permuta, de mandato, y otros de naturaleza
                comercial.
              </li>
              <li data-translate="asesoramiento_uso_suelo">
                Asesoramiento en temas de uso de suelo, ordenamiento territorial, la obtención de permisos y el
                cumplimiento de la normativa medioambiental para proyectos.
              </li>
            </div>
          </div>


          <div className="accordion-item mb-2">
            <button
              className="flex gap-4 p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
              {/* <img className="w-4 h-auto" src="./assets/img/icons/cuadrado.png" alt="" /> */}
                <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
              <span data-translate="opiniones_legales">Opiniones legales sobre la ley panameña y tratados
                internacionales.</span>
            </button>
          </div>


          <div className="accordion-item mb-2">
            <button
              className="flex gap-4 p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
              {/* <img className="w-4 h-auto" src="./assets/img/icons/cuadrado.png" alt="" /> */}
                <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
              <span data-translate="resolucion_conflictos">Resolución de conflictos: Negociación, Mediación y
                Conciliación.</span>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <a href="#contacto"
              className="flex justify-center items-center w-36 h-12 px-4 text-center rounded-full bg-primario font-bold text-white"
              data-translate="contactar">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>


    <div
      className="accordion-content hidden justify-center items-center relative transition-opacity duration-500 ease-in-out overflow-y-auto"
      id="consultoria-accordion" style={{ maxHeight: "calc(100vh - 4rem)" }}>
      <div className="w-full p-6 flex flex-col">
        <div className="flex justify-end mb-4">
          {/* <img id="closeConsultoriaAccordion" className="w-5 h-auto cursor-pointer" src="./assets/img/icons/close_button.png" alt="" /> */}
            <Image id="closeConsultoriaAccordion" className="w-5 h-auto cursor-pointer" src="/assets/icons/close_button.png" alt="Cerrar" width={20} height={20} />
        </div>
        <h2 className="text-center uppercase text-primario text-4xl mb-4">
          <span data-translate="servicios_consultoria">
            Servicios de
          </span>
          <strong data-translate="servicios_consultoria_strong">Consultoría</strong>
        </h2>

        <div className="accordion-item mb-2">
          <button
            className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
            {/* <img className="w-4 h-auto" src="./assets/img/icons/cuadrado.png" alt="" /> */}
            <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
            <span data-translate="estructuracion_evaluacion">
              Estructuración y evaluación de proyectos privados y públicos
            </span>
          </button>
        </div>

        <div className="accordion-item mb-2">
          <button
            className="flex gap-4 p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
            {/* <img className="w-4 h-auto" src="./assets/img/icons/cuadrado.png" alt="" /> */}
            <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
            <span data-translate="supervision_administracion">
              Supervisión y administración de proyectos
            </span>
          </button>
        </div>

        <div className="accordion-item mb-2">
          <button
            className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
            {/* <img className="w-4 h-auto" src="./assets/img/icons/cuadrado.png" alt="" /> */}
            <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
            <span data-translate="gerencia_proyectos">
              Gerencia de proyectos
            </span>
          </button>
        </div>

        <div className="accordion-item mb-2">
          <button
            className="flex gap-4 accordion-button p-4 border-b border-b-secundario text-secundario font-bold w-full text-justify uppercase">
            {/* <img className="w-4 h-auto" src="./assets/image/icons/cuadrado.png" alt="" /> */}
            <Image src="/assets/icons/cuadrado.png" className="w-4 h-auto" alt="Cuadrado" width={16} height={16} />
            <span data-translate="planificacion_estrategica">
              PLANIFICACIÓN ESTRATEGICA
            </span>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <a href="#contacto"
            className="flex justify-center items-center w-36 h-12 px-4 text-center rounded-full bg-primario font-bold text-white"
            data-translate="contactar">
            Contactar
          </a>
        </div>
      </div>
    </div>

  </section>
        </>
    )
}

export default Services;