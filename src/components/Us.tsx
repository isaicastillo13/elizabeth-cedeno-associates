import Image from "next";

const Us = () => {
  return (
    <section
      id="nosotros"
      className="flex flex-col items-center justify-center pt-28 mb-20"
    >
      {/* Sobre Nosotros */}
      <div
        id="nosotrosSobreNosotros"
        className="mx-auto mb-20 flex h-full w-11/12 flex-col items-center text-justify"
      >
        <h2
          data-translate="sobre_nosotros"
          className="mb-11 text-4xl uppercase text-primario sm:text-5xl"
        >
          Sobre
          <strong data-translate="sobre_nosotros_strong">Nosotros</strong>
        </h2>

        <h3
          data-translate="proposito"
          className="mb-5 text-2xl font-bold uppercase text-primario sm:text-3xl"
        >
          Propósito
        </h3>
        <p
          data-translate="propósito_texto"
          className="mb-20 w-full text-justify text-secundario sm:w-2/5"
        >
          Ser la firma de asesores legales y consultores estratégicos líder en
          Panamá para la realización de negocios y proyectos de alto impacto,
          promoviendo un ambiente de inversiones seguro, confiable y sostenible
          que impulse el crecimiento económico inclusivo en Panamá y la región.
        </p>

        <h3
          data-translate="que_hacemos"
          className="mb-5 text-2xl uppercase text-primario sm:text-3xl"
        >
          ¿Qué estamos{" "}
          <strong data-translate="que_hacemos_strong">haciendo?</strong>
        </h3>
        <p
          data-translate="hacemos_texto"
          className="w-full text-justify text-secundario sm:w-2/5"
        >
          Nos especializamos en el desarrollo exitoso de inversiones en Panamá,
          ofreciendo asesorías legales integrales y consultorías estratégicas, a
          cargo de un equipo de profesionales de alto valor comprometidos en
          brindar una atención enfocada en generar oportunidades y brindar
          soluciones innovadoras, oportunas y eficientes.
        </p>
      </div>

      {/* Valores */}
      <div
        id="nosotrosValores"
        className="relative mb-20 h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/corte_superma.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primario via-primario/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center font-bold text-white text-xl">
          <h2 className="mt-8 mb-52 text-3xl font-normal uppercase sm:text-4xl">
            <strong data-translate="valores_titulo_inicio">Los Valores</strong>
            <span data-translate="valores_titulo_medio">que nos </span>
            <strong data-translate="valores_titulo_final">definen</strong>
          </h2>
          <div className="flex w-10/12 flex-col items-center justify-between sm:flex-row">
            <p
              data-translate="valor_integridad"
              className="mb-4 text-xl sm:mb-0 sm:text-2xl"
            >
              Integridad
            </p>
            <p
              data-translate="valor_solidez"
              className="mb-4 text-xl sm:mb-0 sm:text-2xl"
            >
              Solidez
            </p>
            <p
              data-translate="valorConfianza"
              className="mb-4 text-xl sm:mb-0 sm:text-2xl"
            >
              Confianza
            </p>
            <p data-translate="valorInnovacion" className="text-xl sm:text-2xl">
              Innovación
            </p>
          </div>
        </div>
      </div>

      {/* Quiénes Somos */}
      <div
        id="nosotros_quienesSomos"
        className="mx-auto mb-32 flex h-full w-11/12 flex-col items-center text-justify"
      >
        <h2 className="mb-11 text-4xl uppercase text-primario sm:text-5xl">
          <strong data-translate="quienesSomos_strong">¿Quiénes</strong>
          <span data-translate="quienesSomos"> Somos?</span>
        </h2>
        <p
          data-translate="quienesSomosTexto"
          className="mb-20 w-full text-justify text-secundario sm:w-2/5"
        >
          Somos un equipo de{" "}
          <b data-translate="strong">profesionales comprometidos</b> y
          <b data-translate="strong">apasionados</b> con lo que hacemos. Ponemos
          a disposición de nuestros clientes especialistas en temas de
          contrataciones públicas, concesiones, regímenes fiscales y económicos
          especiales, negociación, formulación y administración de proyectos.
        </p>
      </div>

      {/* Socios */}
      <h2
        data-translate="conocenos"
        className="mb-16 text-4xl font-bold uppercase text-primario sm:text-5xl"
      >
        CONÓCENOS
      </h2>
      <div
        id="nosotrosSocios"
        className="grid w-5/6 grid-cols-1 gap-4 justify-center sm:grid-cols-2"
      >
        <div className="col-span-1 col-start-1 w-full px-4 sm:px-10">
          <h4
            data-translate="sociaFundadora"
            className="font-bold uppercase text-primario"
          >
            SOCIA FUNDADORA
          </h4>
          <h5
            data-translate="nombreSocia"
            className="font-bold uppercase text-primario"
          >
            Elizabeth E. Cedeño de Landecho
          </h5>
          <h6 data-translate="cargoSocia" className="text-primario">
            Abogada, Mediadora y Consultora Senior
          </h6>
          <p
            data-translate="sociaTexto"
            className="mb-20 text-justify text-secundario"
            style={{ whiteSpace: "pre-line" }}
          >
            <br />
            <br />
            Egresada de la Universidad Santa María La Antigua con una
            Licenciatura en Derecho y Ciencias Políticas y una Maestría en
            Derecho Mercantil. Egresada del Programa de Alta Gerencia de la
            Escuela de Negocios INCAE.
            <br />
            <br />
            Cuenta con otras especialidades: en el ámbito jurídico, cuenta con
            una especialización en Derecho Administrativo de la Universidad de
            Panamá, y en Gestión de Contratos de APPs. En el ámbito de
            proyectos, cuenta con especialización en Gestión de Proyectos y
            Gestión de Riesgos. Cuenta con idoneidad para ejercer como abogada,
            y mediadora y conciliadora profesional en la República de Panamá.
            <br />
            <br />
            Cuenta con una amplia trayectoria profesional, destacándose su
            desempeño en el sector público como Jefa de la Secretaría de
            Consultas y Asesoría Jurídica del Estado en la Procuraduría de la
            Administración en la República de Panamá, cargo que ocupó durante 8
            años. Además, ha brindado servicios de asesoría jurídica para
            diversos organismos estatales y municipales por más de 17 años.
            <br />
            <br />
            En el ámbito de proyectos, ha trabajado como consultora y gerente de
            proyectos por más de 15 años para proyectos financiados por
            organismos internacionales como el Banco Interamericano de
            Desarrollo (BID) y el Programa de las Naciones Unidas para el
            Desarrollo (PNUD).
            <br />
            <br />
            En el sector privado, posee más de 20 años de experiencia como
            abogada de empresas de los sectores turísticos, de construcción, de
            seguros y fianzas, así como de fundaciones y patronatos.
            <br />
            <br />
            Es miembro asesor de la Academia de Derecho Administrativo de
            Panamá. Ha sido miembro de diversas comisiones codificadoras y
            conferencista en temas de Derecho Administrativo y Proyectos de
            Desarrollo.
            <br />
            <br />
            Alumni INCAE 2016. Alumni del International Visitor Leadership
            Program 2009 (Rule of Law).
            <br />
            <br />
          </p>
        </div>
        <div className="lg:col-start-2 sm:col-span-1 flex items-center justify-center">
          <img
            src="./assets/image/Perfil_ElizabethLandecho.jpg"
            alt=""
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Us;
