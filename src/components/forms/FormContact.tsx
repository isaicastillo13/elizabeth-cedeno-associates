"use client";
import { use, useState } from "react";
import edificios_ciudad_panama from "../../../public/assets/image/edificios_ciudad_panama.jpg";
import { set } from "mongoose";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Correo enviado correctamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar el correo");
      }
      return;
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error al enviar el correo");
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contacto"
        className="relative flex flex-col items-center justify-center h-full gap-2 p-6 text-white bg-center bg-cover shadow-md bg-primario"
      >
        {/* Capa de color y opacidad sobre la imagen */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50"
          style={{ backgroundImage: `url(${edificios_ciudad_panama.src})` }}
        ></div>

        {/* Formulario que se posiciona encima de la capa con opacidad */}
        <div className="relative flex flex-col items-center w-full max-w-md p-6 rounded shadow-lg bg-opacity-80">
          <h3 className="font-bold uppercase text-[30px]">Contáctenos</h3>
          <p className="text-[10] md:text-[14px] text-center mb-4">
            y descubra cómo podemos ayudarle a alcanzar sus objetivos. Nuestra
            experiencia está a su disposición.
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-lg font-semibold">
                Nombre:
              </label>
              <input
                placeholder="Nombre"
                type="text"
                id="name"
                name="name"
                disabled={isSubmitting}
                className={`p-2 border rounded text-gray-500 ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <label htmlFor="email" className="text-lg font-semibold">
                Correo Electrónico:
              </label>
              <input
                placeholder="Correo Electrónico"
                type="email"
                id="email"
                name="email"
                disabled={isSubmitting}
                className={`p-2 border rounded text-gray-500 ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <label htmlFor="message" className="text-lg font-semibold">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escriba su mensaje aquí..."
                disabled={isSubmitting}
                className={`p-2 border rounded resize-none text-gray-500 ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>

              <button
                type="submit"
                className={`p-2 font-bold text-green-500 transition-colors duration-300 bg-white rounded hover:bg-green-500 hover:text-white ${isSubmitting ? "hidden" : "block"}`}
              >
                <span>Enviar</span>
              </button>
              
              <button
                disabled={true}
                className={`flex justify-center gap-4 p-2 font-bold text-gray-400 transition-colors cursor-not-allowed duration-300  bg-white rounded ${isSubmitting ? "block" : "hidden"}`}
              >
         
                <span>
                  Enviando
                </span>
                <img src="https://api.iconify.design/line-md:loading-alt-loop.svg?color=%23888888" alt="" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
