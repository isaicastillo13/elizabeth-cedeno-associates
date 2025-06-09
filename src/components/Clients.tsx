import Image from "next/image";
const Clients = () => {
  return (
    <section className=" text-primario pt-8 pb-4 uppercase flex flex-col items-center justify-center">
      <h2 className="text-center text-5xl mb-2 w-2/3">
        Nuestros <b className="font-bold"> clientes y aliados estratégicos </b>
      </h2>

      <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {/* Ensure that the images cover entire screen width for a smooth transition */}

          <Image
            src="/assets/logos/logo_assa.png"
            alt="Logo Assa"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "64px" }}
            height={64}
          />


          <Image
            src="/assets/logos/logo_teatro_nacional.png"
            alt="Logo Teatro Nacional"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "64px" }}
            height={64}
          />

          <Image
            src="/assets/logos/logo_arh.png"
            alt="Logo ARH"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "64px" }}
            height={64}
          />

          <Image
            src="/assets/logos/logo_grupo_bargen.png"
            alt="Logo Grupo Bargen"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "40px" }}
            height={40}
          />
          <Image
            src="/assets/logos/logo-cecom.png"
            alt="Logo CECOM"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "64px" }}
            height={64}
          />
          <Image
            src="/assets/logos/logo_cheap.png"
            alt="Logo Cheap Rent a Car"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "64px" }}
            height={64}
          />
 
        </div>

        {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-auto min-w-full">
          {/* Ensure that the images cover entire screen width for a smooth transition */}
          <Image
            src="/assets/logos/logo_assa.png"
            alt="Logo Assa"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "52px" }}
            height={52}
          />
          <Image
            src="/assets/logos/logo_teatro_nacional.png"
            alt="Logo Teatro Nacional"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "52px" }}
            height={52}
          />
          <Image
            src="/assets/logos/logo_arh.png"
            alt="Logo ARH"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "52px" }}
            height={52}
          />
          <Image
            src="/assets/logos/logo_grupo_bargen.png"
            alt="Logo Grupo Bargen"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "40px" }}
            height={40}
          />
          <Image
            src="/assets/logos/logo-cecom.png"
            alt="Logo CECOM"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "52px" }}
            height={52}
          />
          <Image
            src="/assets/logos/logo_cheap.png"
            alt="Logo Cheap Rent a Car"
            className="mx-4 inline"
            width={64}
            style={{ width: "auto", height: "52px" }}
            height={52}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
