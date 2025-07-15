import Image from "next";


const Hero = () => {
    return (
        <section
            id="hero"
            className="relative h-screen pt-28"
        >
            <video
                id="backgroundVideo"
                src="/assets/videos/videoHero.mp4"
                poster="/assets/img/poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-primario bg-opacity-50" />

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full mx-auto text-center text-white">
                <h1
                    data-translate="heroTitle"
                    className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
                >
                    ASESORÍAS LEGALES INTEGRALES Y CONSULTORÍAS ESTRATÉGICAS
                </h1>
                <p
                    data-translate="heroSubtitle"
                    className="mb-8 text-lg font-normal sm:text-xl md:text-2xl"
                >
                    Que facilitan la toma de decisiones corporativas y el desarrollo
                    <br />
                    óptimo de tus proyectos.
                </p>
                <a
                    href="#contacto"
                    data-translate="contactar"
                    className="flex items-center justify-center h-12 w-48 rounded-full bg-white px-4 text-center text-lg font-bold text-primario sm:w-60 sm:text-xl"
                >
                    Contactar
                </a>
            </div>
        </section>
    );
};

export default Hero;
