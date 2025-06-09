'use client'

import Image from "next/image"

const logos = [
  { src: "/assets/logos/logo_assa.png", alt: "Logo Assa" },
  { src: "/assets/logos/logo_teatro_nacional.png", alt: "Logo Teatro Nacional" },
  { src: "/assets/logos/logo_arh.png", alt: "Logo ARH" },
  { src: "/assets/logos/logo_grupo_bargen.png", alt: "Logo Grupo Bargen" },
  { src: "/assets/logos/logo-cecom.png", alt: "Logo CECOM" },
  { src: "/assets/logos/logo_cheap.png", alt: "Logo Cheap Rent a Car" },
]

export default function InfiniteCarousel() {
  return (
    <section className="py-12 bg-white text-primario">
      <h2 className="text-center text-4xl font-semibold mb-6 uppercase">
        Nuestros <span className="font-bold">clientes y aliados estratégicos</span>
      </h2>

      <div className="relative overflow-hidden whitespace-nowrap group">
        <div className="flex w-max animate-slide-left group-hover:animation-pause">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-6 flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
