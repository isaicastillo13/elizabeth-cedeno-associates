import React from "react";
import Image from "next/image";

export default function FormContact() {
    <>
    <section>
        <h3></h3>
        <form action="">
            <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-lg font-semibold">Nombre:</label>
                <input type="text" id="name" name="name" className="p-2 border rounded" required />

                <label htmlFor="email" className="text-lg font-semibold">Correo Electrónico:</label>
                <input type="email" id="email" name="email" className="p-2 border rounded" required />

                <label htmlFor="message" className="text-lg font-semibold">Mensaje:</label>
                <textarea id="message" name="message" rows={4} className="p-2 border rounded" required></textarea>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Enviar</button>
            </div>
        </form>
    </section>
    </>
}