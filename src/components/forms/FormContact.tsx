import React from "react";
import edificios_ciudad_panama from "../../../public/assets/image/edificios_ciudad_panama.jpg";

export default function FormContact() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen gap-2 p-6 text-white bg-center bg-cover shadow-md bg-primario">
        {/* Capa de color y opacidad sobre la imagen */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50"
          style={{ backgroundImage: `url(${edificios_ciudad_panama.src})` }}
        ></div>

        {/* Formulario que se posiciona encima de la capa con opacidad */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-md p-6 rounded shadow-lg bg-opacity-80">
          <h3 className="font-bold uppercase">Contáctenos</h3>
          <p className="uppercase text-[10] md:text-[14px] text-center mb-4">
            y descubra cómo podemos ayudarle a alcanzar sus objetivos. Nuestra
            experiencia está a su disposición.
          </p>

          <form action="" className="w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-lg font-semibold">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border rounded"
                required
              />

              <label htmlFor="email" className="text-lg font-semibold">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border rounded"
                required
              />

              <label htmlFor="message" className="text-lg font-semibold">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-2 border rounded"
                required
              ></textarea>

              <button
                type="submit"
                className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
