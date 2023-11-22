import React from "react";
import CheckIcon from "@/components/assets/CheckIcon";
import PhoneIcon from "@/components/assets/PhoneIcon";

import SeguridadIcon from "@/components/assets/SeguridadIcon";
import FileLookImage from "@/components/assets/FileLookImage";
import VelocidadIcon from "@/components/assets/VelocidadIcon";
const SobreNosotros = () => {
  let info = [
    {
      title: "Atención 24/7",
      description:
        "Gracias a nuestro gran equipo y sistemas automatizados podemos garantizar una atención al cliente 24/7.",
      icon: <PhoneIcon className="h-12 w-12" />,
    },
    {
      title: "Velocidad",
      description:
        "Ofrecemos la mayor velocidad que asegura la navegacion sin limites. Nunca hemos estado tan conectados como hoy.",
      icon: <VelocidadIcon className="h-12 w-12" />,
    },
    {
      title: "Estabilidad",
      description:
        "Contamos con la mejor infraestructura jamas vista en el pais. Esto nos permite ofrecer conexión estable en un 99.99%.",
      icon: <CheckIcon className="h-12 w-12" />,
    },
    {
      title: "Seguridad",
      description:
        "Proteger la privacidad de nuestros clientes es primordial, por eso, hemos implementado seguridad de grado militar.",
      icon: <SeguridadIcon className="h-12 w-12" />,
    },
  ];
  return (
    <section
      id="sobrenosotros"
      className="flex flex-col   justify-center items-center w-full"
    >
      <div className="max-w-page items-center gap-8  w-full bg-accent rounded-lg  p-6 flex flex-col ">
        <div className="">
          <h2 className="text-center text-muted-foreground slide-in-top">
            SOBRE NOSOTROS
          </h2>
          <h2
            className="text-4xl font-bold text-center slide-in-top"
            style={{
              "--i": 2,
            }}
          >
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="flex gap-5 flex-wrap-reverse md:flex-nowrap items-center justify-center">
          <div className="grid grid-cols-2 gap-3 ">
            {info.map((item, index) => {
              return (
                <div
                  style={{
                    "--i": 3 + index++,
                  }}
                  className="flex items-center gap-3 flex-wrap md:flex-nowrap justify-center scale-in-center"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <div className="text-center md:text-start ">
                    <h3 className="font-bold ">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
