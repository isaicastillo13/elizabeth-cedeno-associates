import Image from 'next/image';

const Blog = () => {
    return(
        <section className="flex flex-col justify-center items-center w-5/6 mx-auto md:h-screen" id="articulos">
    <h2 className="text-5xl text-primario mb-11 font-bold uppercase" data-translate="articulos_titulo">ARTÍCULOS</h2>

    <div className="grid md:grid-cols-3 gap-4">
      <div className="border rounded-lg shadow-lg overflow-hidden">

        <a href="./articulos.html" className="block">
          <img className="w-full h-60 object-cover"
            src="https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" />
        </a>

        <div className="p-4">
          <p className="text-justify">
            <strong className="text-primario" data-translate="articulo_card1_titulo">Panamá: Impulso a la Inversión con
              Regímenes Especiales</strong>
            <span className="text-secundario" data-translate="articulo_card1_cuerpo">
              Panamá ha implementado leyes y regulaciones que han fortalecido la inversión local y extranjera,
              promoviendo el comercio internacional, la manufactura y los servicios.
              <a className="text-primario" href="./articulos.html"><strong data-translate="articulo_card1_more">Leer
                  Más...</strong></a>
            </span>

          </p>
        </div>
      </div>

      <div className="border rounded-lg shadow-lg overflow-hidden">

        <a href="./articulos.html" className="block">
          <img className="w-full h-60 object-cover"
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" />
        </a>


        <div className="p-4">
          <p className="text-justify">
            <strong className="text-primario" data-translate="articulo_card2_titulo">Contratos Públicos Regidos por
              Políticas de Organismos Financieros Internacionales en Panamá</strong>
            <span className="text-secundario" data-translate="articulo_card2_cuerpo">
              Si eres una empresa interesada en presentarse a competir en licitaciones públicas en Panamá, es de suma
              relevancia conocer cómo funcionan las contrataciones públicas en este país.
              <a className="text-primario" href="./articulos.html"><strong data-translate="articulo_card1_more"> Leer
                  Más...</strong></a>
            </span>
          </p>
        </div>
      </div>

      <div className="border rounded-lg shadow-lg overflow-hidden">

        <a href="./articulos.html" className="block">
          <img className="w-full h-60 object-cover"
            src="https://images.unsplash.com/photo-1642229407991-e28d009cb968?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" />
        </a>


        <div className="p-4">
          <p className="text-justify">
            <strong className="text-primario" data-translate="articulo_card3_titulo">Contratos Públicos Regidos por
              Políticas de Organismos Financieros Internacionales en Panamá</strong>
            <span className="text-secundario" data-translate="articulo_card3_cuerpo">
              Si eres una empresa interesada en presentarse a competir en licitaciones públicas en Panamá, es de suma
              relevancia conocer cómo funcionan las contrataciones públicas en este país.
              <a className="text-primario" href="./articulos.html"><strong data-translate="articulo_card1_more"> Leer
                  Más...</strong></a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Blog;